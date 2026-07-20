import { underline, magenta } from 'picocolors';
import type Hexo from '../../hexo';

interface MigrateArgs {
  _: string[]
  [key: string]: any
}

function migrateConsole(this: Hexo, args: MigrateArgs): Promise<any> {
    throw new Error("STUB");
}

export = migrateConsole;
