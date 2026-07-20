import { sep, resolve, join, parse, basename, extname } from 'path';
import tildify from 'tildify';
import Theme from '../theme';
import Source from './source';
import { exists, readdir } from 'hexo-fs';
import { magenta } from 'picocolors';
import { deepMerge } from 'hexo-util';
import validateConfig from './validate_config';
import type Hexo from './index';

export = async (ctx: Hexo): Promise<void> => {
    throw new Error("STUB");
};

async function findConfigPath(path: string): Promise<string> {
    throw new Error("STUB");
}
