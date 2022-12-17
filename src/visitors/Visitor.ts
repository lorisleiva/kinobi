import type {
  AccountNode,
  DefinedTypeNode,
  InstructionNode,
  RootNode,
  TypeLeafNode,
  TypeStructNode,
} from 'src/nodes';

export interface Visitor {
  // Root.
  visitRoot: (root: RootNode) => void;

  // Components.
  visitAccount: (account: AccountNode) => void;
  visitInstruction: (instruction: InstructionNode) => void;
  visitDefinedType: (definedType: DefinedTypeNode) => void;

  // Types.
  visitTypeLeaf: (typeLeaf: TypeLeafNode) => void;
  visitTypeStruct: (typeStruct: TypeStructNode) => void;
}
