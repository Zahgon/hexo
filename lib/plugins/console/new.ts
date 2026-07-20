import tildify from 'tildify';
import { magenta } from 'picocolors';
import { basename } from 'path';
import Hexo from '../../hexo';
import type Promise from 'bluebird';

const reservedKeys = {
  _: true,
  title: true,
  layout: true,
  slug: true,
  s: true,
  path: true,
  p: true,
  replace: true,
  r: true,
  // Global options
  config: true,
  debug: true,
  safe: true,
  silent: true
};

interface NewArgs {
  _?: string[]
  p?: string
  path?: string
  s?: string
  slug?: string
  r?: boolean
  replace?: boolean
  [key: string]: any
}

function newConsole(this: Hexo, args: NewArgs): Promise<void> {
    throw new Error("STUB");
}

export = newConsole;
