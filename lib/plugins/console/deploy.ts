import { exists } from 'hexo-fs';
import { underline, magenta } from 'picocolors';
import type Hexo from '../../hexo';
import type Promise from 'bluebird';

interface DeployArgs {
  _?: string[]
  g?: boolean
  generate?: boolean
  [key: string]: any
}

function deployConsole(this: Hexo, args: DeployArgs): Promise<any> {
    throw new Error("STUB");
}

export = deployConsole;
