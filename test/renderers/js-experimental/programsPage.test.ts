import test from 'ava';
import { programNode, visit } from '../../../src';
import { getRenderMapVisitor } from '../../../src/renderers/js-experimental/getRenderMapVisitor';
import { renderMapContains, renderMapContainsImports } from './_setup';

test('it renders the program address constant', (t) => {
  // Given the following program.
  const node = programNode({
    name: 'splToken',
    publicKey: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  });

  // When we render it.
  const renderMap = visit(node, getRenderMapVisitor());

  // Then we expect the following program address constant.
  renderMapContains(t, renderMap, 'programs/splToken.ts', [
    "export const SPL_TOKEN_PROGRAM_ADDRESS = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Address<'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'>;",
  ]);

  // And we expect the following imports.
  renderMapContainsImports(t, renderMap, 'programs/splToken.ts', {
    '@solana/addresses': ['Address'],
  });
});
