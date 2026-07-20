import { join, parse, basename, extname } from 'path';
import tildify from 'tildify';
import { exists, readdir } from 'hexo-fs';
import { magenta } from 'picocolors';
import { deepMerge } from 'hexo-util';
import type Hexo from './index';
import type Promise from 'bluebird';

export = (ctx: Hexo): Promise<void> => {
    throw new Error("STUB");
};

function findConfigPath(path: string): Promise<string> {
    throw new Error("STUB");
}
