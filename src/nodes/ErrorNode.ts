import type { IdlError } from '../idl';
import {
  InvalidKinobiTreeError,
  MainCaseString,
  PartialExcept,
  mainCase,
} from '../shared';

export type ErrorNode = {
  readonly kind: 'errorNode';

  // Data.
  readonly name: MainCaseString;
  readonly idlName: string;
  readonly code: number;
  readonly message: string;
  readonly docs: string[];
};

export type ErrorNodeInput = Omit<
  PartialExcept<ErrorNode, 'name' | 'code' | 'message'>,
  'kind' | 'name'
> & {
  readonly name: string;
};

export function errorNode(input: ErrorNodeInput): ErrorNode {
  if (!input.name) {
    throw new InvalidKinobiTreeError('ErrorNode must have a name.');
  }
  if (input.code < 0) {
    throw new InvalidKinobiTreeError('ErrorNode must have a code number.');
  }
  return {
    kind: 'errorNode',
    name: mainCase(input.name),
    idlName: input.idlName ?? input.name,
    code: input.code,
    message: input.message,
    docs: input.docs ?? [],
  };
}

export function errorNodeFromIdl(idl: Partial<IdlError>): ErrorNode {
  const name = idl.name ?? '';
  const msg = idl.msg ?? '';
  return errorNode({
    name,
    idlName: name,
    code: idl.code ?? -1,
    message: msg,
    docs: idl.docs ?? [msg ? `${name}: ${msg}` : `${name}`],
  });
}
