import type { ImportFrom } from '../../shared';
import { RustTypeManifest } from './GetRustTypeManifestVisitor';

const DEFAULT_MODULE_MAP: Record<string, string> = {
  generated: 'crate::generated',
  generatedAccounts: 'crate::generated::accounts',
  generatedTypes: 'crate::generated::types',
  generatedErrors: 'crate::generated::errors',
  hooked: 'crate::hooked',
  mplEssentials: 'mpl_toolbox',
  mplToolbox: 'mpl_toolbox',
};

export class RustImportMap {
  protected readonly _imports: Map<ImportFrom, Set<string>> = new Map();

  protected readonly _aliases: Map<ImportFrom, Record<string, string>> =
    new Map();

  add(
    module: ImportFrom,
    imports: string | string[] | Set<string>
  ): RustImportMap {
    const currentImports = this._imports.get(module) ?? new Set();
    const newImports = typeof imports === 'string' ? [imports] : imports;
    newImports.forEach((i) => currentImports.add(i));
    this._imports.set(module, currentImports);
    return this;
  }

  remove(
    module: ImportFrom,
    imports: string | string[] | Set<string>
  ): RustImportMap {
    const currentImports = this._imports.get(module) ?? new Set();
    const importsToRemove = typeof imports === 'string' ? [imports] : imports;
    importsToRemove.forEach((i) => currentImports.delete(i));
    if (currentImports.size === 0) {
      this._imports.delete(module);
    } else {
      this._imports.set(module, currentImports);
    }
    return this;
  }

  mergeWith(...others: RustImportMap[]): RustImportMap {
    others.forEach((other) => {
      other._imports.forEach((imports, module) => {
        this.add(module, imports);
      });
      other._aliases.forEach((aliases, module) => {
        Object.entries(aliases).forEach(([name, alias]) => {
          this.addAlias(module, name, alias);
        });
      });
    });
    return this;
  }

  mergeWithManifest(manifest: RustTypeManifest): RustImportMap {
    return this.mergeWith(manifest.imports);
  }

  addAlias(module: ImportFrom, name: string, alias: string): RustImportMap {
    const currentAliases = this._aliases.get(module) ?? {};
    currentAliases[name] = alias;
    this._aliases.set(module, currentAliases);
    return this;
  }

  isEmpty(): boolean {
    return this._imports.size === 0;
  }

  toString(dependencies: Record<ImportFrom, string>): string {
    // TODO: Rustify this.
    const dependencyMap = { ...DEFAULT_MODULE_MAP, ...dependencies };
    const importStatements = [...this._imports.entries()]
      .map(([module, imports]) => {
        const mappedModule: string = dependencyMap[module] ?? module;
        return [mappedModule, module, imports] as const;
      })
      .sort(([a], [b]) => {
        const aIsRelative = a.startsWith('.');
        const bIsRelative = b.startsWith('.');
        if (aIsRelative && !bIsRelative) return 1;
        if (!aIsRelative && bIsRelative) return -1;
        return a.localeCompare(b);
      })
      .map(([mappedModule, module, imports]) => {
        const aliasMap = this._aliases.get(module) ?? {};
        const joinedImports = [...imports]
          .sort()
          .map((i) => (aliasMap[i] ? `${i} as ${aliasMap[i]}` : i))
          .join(', ');
        return `use ${mappedModule}::{ ${joinedImports} };`;
      });
    return importStatements.join('\n');
  }
}