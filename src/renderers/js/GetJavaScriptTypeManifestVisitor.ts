import * as nodes from '../../nodes';
import { camelCase, pascalCase } from '../../utils';
import { Visitor } from '../../visitors';
import { JavaScriptImportMap } from './JavaScriptImportMap';
import { renderJavaScriptValueNode } from './RenderJavaScriptValueNode';

export type JavaScriptTypeManifest = {
  strictType: string;
  looseType: string;
  hasLooseType: boolean;
  isEnum: boolean;
  serializer: string;
  imports: JavaScriptImportMap;
};

export class GetJavaScriptTypeManifestVisitor
  implements Visitor<JavaScriptTypeManifest>
{
  private availableDefinedTypes = new Map<string, nodes.DefinedTypeNode>();

  private visitedDefinedTypes = new Map<string, JavaScriptTypeManifest>();

  private definedTypeStack: string[] = [];

  private definedName: {
    strict: string;
    loose: string;
  } | null = null;

  constructor(readonly serializerVariable = 's') {}

  registerDefinedTypes(definedTypes: nodes.DefinedTypeNode[]): void {
    definedTypes.forEach((definedType) => {
      this.availableDefinedTypes.set(definedType.name, definedType);
    });
  }

  visitRoot(): JavaScriptTypeManifest {
    throw new Error(
      'Cannot get type manifest for root node. Please select a child node.'
    );
  }

  visitProgram(): JavaScriptTypeManifest {
    throw new Error(
      'Cannot get type manifest for program node. Please select a child node.'
    );
  }

  visitAccount(account: nodes.AccountNode): JavaScriptTypeManifest {
    this.definedName = {
      strict: `${pascalCase(account.name)}AccountData`,
      loose: `${pascalCase(account.name)}AccountArgs`,
    };
    const child = account.type.accept(this);
    this.definedName = null;
    return child;
  }

  visitInstruction(instruction: nodes.InstructionNode): JavaScriptTypeManifest {
    this.definedName = {
      strict: `${pascalCase(instruction.name)}InstructionData`,
      loose: `${pascalCase(instruction.name)}InstructionArgs`,
    };
    const child = instruction.args.accept(this);
    this.definedName = null;
    return child;
  }

  visitDefinedType(definedType: nodes.DefinedTypeNode): JavaScriptTypeManifest {
    if (this.visitedDefinedTypes.has(definedType.name)) {
      return this.visitedDefinedTypes.get(definedType.name)!;
    }

    this.definedTypeStack.push(definedType.name);
    this.definedName = {
      strict: pascalCase(definedType.name),
      loose: `${pascalCase(definedType.name)}Args`,
    };
    const child = definedType.type.accept(this);
    this.definedName = null;
    this.definedTypeStack.pop();
    this.visitedDefinedTypes.set(definedType.name, child);
    return child;
  }

  visitError(): JavaScriptTypeManifest {
    throw new Error('Cannot get type manifest for error node.');
  }

  visitTypeArray(typeArray: nodes.TypeArrayNode): JavaScriptTypeManifest {
    const itemType = typeArray.itemType.accept(this);
    return {
      ...itemType,
      strictType: `Array<${itemType.strictType}>`,
      looseType: `Array<${itemType.looseType}>`,
      serializer: `${this.s('array')}(${itemType.serializer}, ${
        typeArray.size
      })`,
    };
  }

  visitTypeDefinedLink(
    typeDefinedLink: nodes.TypeDefinedLinkNode
  ): JavaScriptTypeManifest {
    const linkedDefinedType = this.availableDefinedTypes.get(
      typeDefinedLink.definedType
    );
    if (!linkedDefinedType) {
      throw new Error(
        `Cannot find linked defined type ${typeDefinedLink.definedType}.`
      );
    }

    let linkedDefinedTypeHasLooseType = false;
    if (this.definedTypeStack.includes(linkedDefinedType.name)) {
      // This prevents infinite recursion by using loose types
      // for all types in a cyclic dependency.
      linkedDefinedTypeHasLooseType = true;
    } else {
      const linkedManifest = linkedDefinedType.accept(this);
      linkedDefinedTypeHasLooseType = linkedManifest.hasLooseType;
    }

    const pascalCaseDefinedType = pascalCase(typeDefinedLink.definedType);
    const serializerName = `get${pascalCaseDefinedType}Serializer`;
    const rawDependency =
      typeDefinedLink.dependency ?? linkedDefinedType.metadata.importFrom;
    const dependency =
      rawDependency === 'generated' ? 'generatedTypes' : rawDependency;

    return {
      strictType: pascalCaseDefinedType,
      looseType: linkedDefinedTypeHasLooseType
        ? `${pascalCaseDefinedType}Args`
        : pascalCaseDefinedType,
      hasLooseType: linkedDefinedTypeHasLooseType,
      isEnum: false,
      serializer: `${serializerName}(context)`,
      imports: new JavaScriptImportMap().add(dependency, [
        serializerName,
        pascalCaseDefinedType,
        ...(linkedDefinedTypeHasLooseType
          ? [`${pascalCaseDefinedType}Args`]
          : []),
      ]),
    };
  }

  visitTypeEnum(typeEnum: nodes.TypeEnumNode): JavaScriptTypeManifest {
    const variantNames = typeEnum.variants.map((variant) =>
      pascalCase(variant.name)
    );
    const { definedName } = this;
    this.definedName = null;

    if (typeEnum.isScalarEnum()) {
      if (definedName === null) {
        throw new Error(
          'Scalar enums cannot be inlined and must be introduced ' +
            'via a defined type. Ensure you are not inlining a ' +
            'defined type that is a scalar enum through a visitor.'
        );
      }
      return {
        strictType: `{ ${variantNames.join(', ')} }`,
        looseType: `{ ${variantNames.join(', ')} }`,
        hasLooseType: false,
        isEnum: true,
        serializer:
          `${this.s('enum')}<${definedName.strict}>` +
          `(${definedName.strict}, '${definedName.strict}')`,
        imports: new JavaScriptImportMap(),
      };
    }

    const variants = typeEnum.variants.map(
      (variant): JavaScriptTypeManifest => {
        const variantName = pascalCase(variant.name);
        this.definedName = definedName
          ? {
              strict: `GetDataEnumKindContent<${definedName.strict}, '${variantName}'>`,
              loose: `GetDataEnumKindContent<${definedName.loose}, '${variantName}'>`,
            }
          : null;
        const variantManifest = variant.accept(this);
        this.definedName = null;
        return variantManifest;
      }
    );

    const mergedManifest = this.mergeManifests(variants);
    const variantSerializers = variants
      .map((variant) => variant.serializer)
      .join(', ');
    const description = typeEnum.name || definedName?.strict;
    const descriptionArgs = description
      ? `, undefined, '${pascalCase(description)}'`
      : '';
    const serializerTypeParams = definedName ? definedName.strict : 'any';

    return {
      ...mergedManifest,
      strictType: variants.map((v) => v.strictType).join(' | '),
      looseType: variants.map((v) => v.looseType).join(' | '),
      serializer:
        `${this.s('dataEnum')}<${serializerTypeParams}>` +
        `([${variantSerializers}]${descriptionArgs})`,
      imports: mergedManifest.imports.add('core', [
        'GetDataEnumKindContent',
        'GetDataEnumKind',
      ]),
    };
  }

  visitTypeEnumEmptyVariant(
    typeEnumEmptyVariant: nodes.TypeEnumEmptyVariantNode
  ): JavaScriptTypeManifest {
    const name = pascalCase(typeEnumEmptyVariant.name);
    const kindAttribute = `__kind: "${name}"`;
    return {
      strictType: `{ ${kindAttribute} }`,
      looseType: `{ ${kindAttribute} }`,
      hasLooseType: false,
      isEnum: false,
      serializer: `['${name}', ${this.s('unit')}]`,
      imports: new JavaScriptImportMap(),
    };
  }

  visitTypeEnumStructVariant(
    typeEnumStructVariant: nodes.TypeEnumStructVariantNode
  ): JavaScriptTypeManifest {
    const name = pascalCase(typeEnumStructVariant.name);
    const kindAttribute = `__kind: "${name}"`;
    const type = typeEnumStructVariant.struct.accept(this);
    return {
      ...type,
      strictType: `{ ${kindAttribute},${type.strictType.slice(1, -1)}}`,
      looseType: `{ ${kindAttribute},${type.looseType.slice(1, -1)}}`,
      serializer: `['${name}', ${type.serializer}]`,
    };
  }

  visitTypeEnumTupleVariant(
    typeEnumTupleVariant: nodes.TypeEnumTupleVariantNode
  ): JavaScriptTypeManifest {
    const name = pascalCase(typeEnumTupleVariant.name);
    const kindAttribute = `__kind: "${name}"`;
    const struct = new nodes.TypeStructNode(name, [
      new nodes.TypeStructFieldNode(
        { name: 'fields', docs: [], defaultsTo: null },
        typeEnumTupleVariant.tuple
      ),
    ]);
    const type = struct.accept(this);
    return {
      ...type,
      strictType: `{ ${kindAttribute},${type.strictType.slice(1, -1)}}`,
      looseType: `{ ${kindAttribute},${type.looseType.slice(1, -1)}}`,
      serializer: `['${name}', ${type.serializer}]`,
    };
  }

  visitTypeLeaf(typeLeaf: nodes.TypeLeafNode): JavaScriptTypeManifest {
    const base = (
      strictType: string,
      looseType?: string
    ): JavaScriptTypeManifest => ({
      strictType,
      looseType: looseType ?? strictType,
      serializer: this.s(typeLeaf.leaf.kind),
      hasLooseType: !!looseType,
      isEnum: false,
      imports: new JavaScriptImportMap(),
    });

    switch (typeLeaf.leaf.kind) {
      case 'string':
        const stringPrefix =
          typeLeaf.leaf.prefix === 'u32' ? '' : this.s(typeLeaf.leaf.prefix);
        return {
          ...base('string'),
          serializer: this.s(`string(${stringPrefix})`),
        };
      case 'fixedString':
        return {
          ...base('string'),
          serializer: this.s(`fixedString(${typeLeaf.leaf.bytes})`),
        };
      case 'variableString':
        return { ...base('string'), serializer: this.s('variableString()') };
      case 'bytes':
        return { ...base('Uint8Array') };
      case 'publicKey':
        return {
          ...base('PublicKey'),
          imports: new JavaScriptImportMap().add('core', 'PublicKey'),
        };
      case 'bool':
        const boolPrefix =
          typeLeaf.leaf.prefix === 'u8' ? '' : this.s(typeLeaf.leaf.prefix);
        return {
          ...base('boolean'),
          serializer: this.s(`bool(${boolPrefix})`),
        };
      case 'number':
        const isBigNumber = ['u64', 'u128', 'i64', 'i128'].includes(
          typeLeaf.leaf.number
        );
        const numberBase = isBigNumber
          ? base('bigint', 'number | bigint')
          : base('number');
        return {
          ...numberBase,
          serializer: this.s(typeLeaf.leaf.number),
        };
      default:
        // eslint-disable-next-line prefer-destructuring
        const leaf: never = typeLeaf.leaf;
        throw new Error(`Unknown type leaf kind: ${(leaf as any).kind}`);
    }
  }

  visitTypeLeafWrapper(
    typeLeafWrapper: nodes.TypeLeafWrapperNode
  ): JavaScriptTypeManifest {
    const leaf = typeLeafWrapper.leaf.accept(this);
    const { wrapper } = typeLeafWrapper;
    switch (wrapper.kind) {
      case 'DateTime':
        if (!typeLeafWrapper.leaf.isInteger()) {
          throw new Error(
            `DateTime wrappers can only be applied to integer ` +
              `types. Got type [${typeLeafWrapper.leaf.toString()}].`
          );
        }
        return {
          ...leaf,
          imports: leaf.imports.add('core', [
            'DateTime',
            'DateTimeInput',
            'mapDateTimeSerializer',
          ]),
          strictType: `DateTime`,
          looseType: `DateTimeInput`,
          serializer: `mapDateTimeSerializer(${leaf.serializer})`,
        };
      case 'Amount':
      case 'SolAmount':
        if (!typeLeafWrapper.leaf.isUnsignedInteger()) {
          throw new Error(
            `Amount wrappers can only be applied to unsigned ` +
              `integer types. Got type [${typeLeafWrapper.leaf.toString()}].`
          );
        }
        const identifier =
          wrapper.kind === 'SolAmount' ? 'SOL' : wrapper.identifier;
        const decimals = wrapper.kind === 'SolAmount' ? 9 : wrapper.decimals;
        const idAndDecimals = `'${identifier}', ${decimals}`;
        const isSolAmount = identifier === 'SOL' && decimals === 9;
        const amountType = isSolAmount
          ? 'SolAmount'
          : `Amount<${idAndDecimals}>`;
        return {
          ...leaf,
          imports: leaf.imports.add('core', [
            isSolAmount ? 'SolAmount' : 'Amount',
            'mapAmountSerializer',
          ]),
          strictType: amountType,
          looseType: amountType,
          serializer: `mapAmountSerializer(${leaf.serializer}, ${idAndDecimals})`,
        };
      default:
        return leaf;
    }
  }

  visitTypeMap(typeMap: nodes.TypeMapNode): JavaScriptTypeManifest {
    const key = typeMap.keyType.accept(this);
    const value = typeMap.valueType.accept(this);
    return {
      ...this.mergeManifests([key, value]),
      strictType: `Map<${key.strictType}, ${value.strictType}>`,
      looseType: `Map<${key.looseType}, ${value.looseType}>`,
      serializer: `${this.s('map')}(${key.serializer}, ${value.serializer})`,
    };
  }

  visitTypeOption(typeOption: nodes.TypeOptionNode): JavaScriptTypeManifest {
    const child = typeOption.type.accept(this);
    const optionSerializer = this.s(
      typeOption.optionType === 'coption' ? 'fixedOption' : 'option'
    );
    const prefixSerializer =
      typeOption.optionType === 'coption' ? `, ${this.s('u32')}` : '';
    return {
      ...child,
      strictType: `Option<${child.strictType}>`,
      looseType: `Option<${child.looseType}>`,
      serializer: `${optionSerializer}(${child.serializer}${prefixSerializer})`,
      imports: child.imports.add('core', 'Option'),
    };
  }

  visitTypeSet(typeSet: nodes.TypeSetNode): JavaScriptTypeManifest {
    const child = typeSet.type.accept(this);
    return {
      ...child,
      strictType: `Set<${child.strictType}>`,
      looseType: `Set<${child.looseType}>`,
      serializer: `${this.s('set')}(${child.serializer})`,
    };
  }

  visitTypeStruct(typeStruct: nodes.TypeStructNode): JavaScriptTypeManifest {
    const { definedName } = this;
    this.definedName = null;

    const fields = typeStruct.fields.map((field) => field.accept(this));
    const mergedManifest = this.mergeManifests(fields);
    const fieldSerializers = fields.map((field) => field.serializer).join(', ');
    const structDescription = typeStruct.name
      ? `, '${pascalCase(typeStruct.name)}'`
      : '';
    const serializerTypeParams = definedName ? definedName.strict : 'any';
    const baseManifest = {
      ...mergedManifest,
      strictType: `{ ${fields.map((field) => field.strictType).join('')} }`,
      looseType: `{ ${fields.map((field) => field.looseType).join('')} }`,
      serializer:
        `${this.s('struct')}<${serializerTypeParams}>` +
        `([${fieldSerializers}]${structDescription})`,
    };

    const optionalFields = typeStruct.fields.filter(
      (f) => f.metadata.defaultsTo !== null
    );
    if (optionalFields.length === 0) {
      return baseManifest;
    }

    const defaultValues = optionalFields
      .map((f) => {
        const key = camelCase(f.name);
        const defaultsTo = f.metadata.defaultsTo as NonNullable<
          typeof f.metadata.defaultsTo
        >;
        const { render: renderedValue, imports } = renderJavaScriptValueNode(
          defaultsTo.value,
          this.availableDefinedTypes
        );
        baseManifest.imports.mergeWith(imports);
        if (defaultsTo.strategy === 'omitted') {
          return `${key}: ${renderedValue}`;
        }
        return `${key}: value.${key} ?? ${renderedValue}`;
      })
      .join(', ');
    const mapSerializerTypeParams = definedName
      ? `${definedName.loose}, ${definedName.strict}, ${definedName.strict}`
      : 'any, any, any';
    const asReturnType = definedName ? ` as ${definedName.strict}` : '';
    const mappedSerializer =
      `mapSerializer<${mapSerializerTypeParams}>(` +
      `${baseManifest.serializer}, ` +
      `(value) => ({ ...value, ${defaultValues} }${asReturnType}) ` +
      `)`;

    return {
      ...baseManifest,
      serializer: mappedSerializer,
      imports: baseManifest.imports.add('core', 'mapSerializer'),
    };
  }

  visitTypeStructField(
    typeStructField: nodes.TypeStructFieldNode
  ): JavaScriptTypeManifest {
    const { metadata } = typeStructField;
    const name = camelCase(typeStructField.name);
    const fieldType = typeStructField.type.accept(this);
    const docblock = this.createDocblock(metadata.docs);
    const baseField = {
      ...fieldType,
      strictType: `${docblock}${name}: ${fieldType.strictType}; `,
      looseType: `${docblock}${name}: ${fieldType.looseType}; `,
      serializer: `['${name}', ${fieldType.serializer}]`,
    };
    if (metadata.defaultsTo === null) {
      return baseField;
    }
    if (metadata.defaultsTo.strategy === 'optional') {
      return {
        ...baseField,
        hasLooseType: true,
        looseType: `${docblock}${name}?: ${fieldType.looseType}; `,
      };
    }
    return { ...baseField, hasLooseType: true, looseType: '' };
  }

  visitTypeTuple(typeTuple: nodes.TypeTupleNode): JavaScriptTypeManifest {
    const items = typeTuple.itemTypes.map((itemType) => itemType.accept(this));
    const itemSerializers = items.map((item) => item.serializer).join(', ');
    return {
      ...this.mergeManifests(items),
      strictType: `[${items.map((item) => item.strictType).join(', ')}]`,
      looseType: `[${items.map((item) => item.looseType).join(', ')}]`,
      serializer: `${this.s('tuple')}([${itemSerializers}])`,
    };
  }

  visitTypeVec(typeVec: nodes.TypeVecNode): JavaScriptTypeManifest {
    const itemType = typeVec.itemType.accept(this);
    return {
      ...itemType,
      strictType: `Array<${itemType.strictType}>`,
      looseType: `Array<${itemType.looseType}>`,
      serializer: `${this.s('vec')}(${itemType.serializer})`,
    };
  }

  protected s(name: string): string {
    return `${this.serializerVariable}.${name}`;
  }

  protected mergeManifests(
    manifests: JavaScriptTypeManifest[]
  ): Pick<JavaScriptTypeManifest, 'imports' | 'hasLooseType' | 'isEnum'> {
    return {
      imports: new JavaScriptImportMap().mergeWith(
        ...manifests.map((td) => td.imports)
      ),
      hasLooseType: manifests.some((td) => td.hasLooseType),
      isEnum: false,
    };
  }

  protected createDocblock(docs: string[]): string {
    if (docs.length <= 0) return '';
    if (docs.length === 1) return `\n/** ${docs[0]} */\n`;
    const lines = docs.map((doc) => ` * ${doc}`);
    return `\n/**\n${lines.join('\n')}\n */\n`;
  }
}
