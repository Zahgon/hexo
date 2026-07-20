import { resolve } from 'path';
import tildify from 'tildify';
import prettyHrtime from 'pretty-hrtime';
import { writeFile } from 'hexo-fs';
import { cyan, magenta } from 'picocolors';
import type Hexo from '../../hexo';
import type Promise from 'bluebird';

interface RenderArgs {
  _: string[]
  o?: string
  output?: string
  pretty?: boolean
  engine?: string
  [key: string]: any
}

function renderConsole(this: Hexo, args: RenderArgs): Promise<void> {
    throw new Error("STUB");
}

export = renderConsole;
