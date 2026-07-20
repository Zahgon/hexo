import { isAbsolute, resolve, join, extname } from 'path';
import { existsSync, readFileSync, writeFileSync } from 'hexo-fs';
import yml from 'js-yaml';
import { deepMerge } from 'hexo-util';
import type Hexo from './index';

export = (ctx: Hexo) => { throw new Error("STUB"); };
