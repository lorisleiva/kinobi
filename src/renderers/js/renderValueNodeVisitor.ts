import { Visitor, visit } from '../../visitors';
import { RegisteredValueNodes } from '../../nodes';
import { camelCase, pascalCase } from '../../shared';
import { JavaScriptImportMap } from './JavaScriptImportMap';

export function renderValueNodeVisitor(): Visitor<
  {
    imports: JavaScriptImportMap;
    render: string;
  },
  keyof RegisteredValueNodes
> {
  return {
    visitArrayValue(node) {
      const list = node.items.map((v) => visit(v, this));
      return {
        imports: new JavaScriptImportMap().mergeWith(
          ...list.map((c) => c.imports)
        ),
        render: `[${list.map((c) => c.render).join(', ')}]`,
      };
    },
    visitBooleanValue(node) {
      return {
        imports: new JavaScriptImportMap(),
        render: JSON.stringify(node.boolean),
      };
    },
    visitEnumValue(node) {
      const imports = new JavaScriptImportMap();
      const enumName = pascalCase(node.enumType);
      const variantName = pascalCase(node.variant);
      const rawImportFrom = node.importFrom ?? 'generated';
      const importFrom =
        rawImportFrom === 'generated' ? 'generatedTypes' : rawImportFrom;

      if (node.value === 'scalar') {
        return {
          imports: imports.add(importFrom, enumName),
          render: `${enumName}.${variantName}`,
        };
      }

      const enumFn = camelCase(node.enumType);
      imports.add(importFrom, enumFn);

      if (node.value === 'empty') {
        return { imports, render: `${enumFn}('${variantName}')` };
      }

      const enumValue = visit(node.value, this);
      const fields = enumValue.render;
      imports.mergeWith(enumValue.imports);

      return {
        imports,
        render: `${enumFn}('${variantName}', ${fields})`,
      };
    },
    visitMapValue(node) {
      const map = node.entries.map(([k, v]) => {
        const mapKey = visit(k, this);
        const mapValue = visit(v, this);
        return {
          imports: mapKey.imports.mergeWith(mapValue.imports),
          render: `[${mapKey.render}, ${mapValue.render}]`,
        };
      });
      return {
        imports: new JavaScriptImportMap().mergeWith(
          ...map.map((c) => c.imports)
        ),
        render: `new Map([${map.map((c) => c.render).join(', ')}])`,
      };
    },
    visitNoneValue() {
      return {
        imports: new JavaScriptImportMap().add('umi', 'none'),
        render: 'none()',
      };
    },
    visitNumberValue(node) {
      return {
        imports: new JavaScriptImportMap(),
        render: JSON.stringify(node.number),
      };
    },
    visitPublicKeyValue(node) {
      return {
        imports: new JavaScriptImportMap().add('umi', 'publicKey'),
        render: `publicKey("${node.publicKey}")`,
      };
    },
    visitSetValue(node) {
      const set = node.items.map((v) => visit(v, this));
      return {
        imports: new JavaScriptImportMap().mergeWith(
          ...set.map((c) => c.imports)
        ),
        render: `new Set([${set.map((c) => c.render).join(', ')}])`,
      };
    },
    visitSomeValue(node) {
      const child = visit(node.value, this);
      return {
        imports: child.imports.add('umi', 'some'),
        render: `some(${child.render})`,
      };
    },
    visitStringValue(node) {
      return {
        imports: new JavaScriptImportMap(),
        render: JSON.stringify(node.string),
      };
    },
    visitStructValue(node) {
      const struct = Object.entries(node.fields).map(([k, v]) => {
        const structValue = visit(v, this);
        return {
          imports: structValue.imports,
          render: `${k}: ${structValue.render}`,
        };
      });
      return {
        imports: new JavaScriptImportMap().mergeWith(
          ...struct.map((c) => c.imports)
        ),
        render: `{ ${struct.map((c) => c.render).join(', ')} }`,
      };
    },
    visitTupleValue(node) {
      const list = node.items.map((v) => visit(v, this));
      return {
        imports: new JavaScriptImportMap().mergeWith(
          ...list.map((c) => c.imports)
        ),
        render: `[${list.map((c) => c.render).join(', ')}]`,
      };
    },
  };
}