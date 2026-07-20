import tildify from 'tildify';
import { magenta } from 'picocolors';
import type Hexo from '../../hexo';
import type Promise from 'bluebird';

interface PublishArgs {
  _: string[]
  r?: boolean
  replace?: boolean
  [key: string]: any
}

function publishConsole(this: Hexo, args: PublishArgs): Promise<void> {
    throw new Error("STUB");
}

export = publishConsole;
