import { adjustDateForTimezone, toDate, isExcludedFile, isMatch } from './common';
import Promise from 'bluebird';
import { parse as yfm } from 'hexo-front-matter';
import { extname, relative } from 'path';
import { Pattern } from 'hexo-util';
import { magenta } from 'picocolors';
import type { _File } from '../../box';
import type Hexo from '../../hexo';
import type { Stats } from 'fs';
import { PageSchema } from '../../types';

export = (ctx: Hexo) => {
    throw new Error("STUB");
};

function processPage(ctx: Hexo, file: _File) {
    throw new Error("STUB");
}

function processAsset(ctx: Hexo, file: _File) {
    throw new Error("STUB");
}
