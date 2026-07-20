import { toDate, adjustDateForTimezone, isExcludedFile, isTmpFile, isHiddenFile, isMatch } from './common';
import Promise from 'bluebird';
import { parse as yfm } from 'hexo-front-matter';
import { extname, join, posix, sep } from 'path';
import { stat, listDir } from 'hexo-fs';
import { slugize, Pattern, Permalink } from 'hexo-util';
import { magenta } from 'picocolors';
import type { _File } from '../../box';
import type Hexo from '../../hexo';
import type { Stats } from 'fs';
import { PostAssetSchema, PostSchema } from '../../types';
import type Document from 'warehouse/dist/document';

const postDir = '_posts/';
const draftDir = '_drafts/';
let permalink: Permalink;

const preservedKeys = {
  title: true,
  year: true,
  month: true,
  day: true,
  i_month: true,
  i_day: true,
  hash: true
};

export = (ctx: Hexo) => {
    throw new Error("STUB");
};

function processPost(ctx: Hexo, file: _File) {
    throw new Error("STUB");
}

function parseFilename(config: string, path: string) {
    throw new Error("STUB");
}

function scanAssetDir(ctx: Hexo, post: PostSchema) {
    throw new Error("STUB");
}

function shouldSkipAsset(ctx: Hexo, post: PostSchema, asset: Document<PostAssetSchema>) {
    throw new Error("STUB");
}

function processAsset(ctx: Hexo, file: _File) {
    throw new Error("STUB");
}
