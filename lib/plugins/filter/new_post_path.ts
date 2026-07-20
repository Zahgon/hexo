import { join, extname } from 'path';
import moment from 'moment';
import Promise from 'bluebird';
import { createSha1Hash, Permalink } from 'hexo-util';
import { ensurePath } from 'hexo-fs';
import type Hexo from '../../hexo';
import type { PostSchema } from '../../types';

let permalink: Permalink;

const reservedKeys = {
  year: true,
  month: true,
  i_month: true,
  day: true,
  i_day: true,
  title: true,
  hash: true
};

function newPostPathFilter(this: Hexo, data: Partial<PostSchema> = {}, replace?: boolean): Promise<string> {
    throw new Error("STUB");
}

export = newPostPathFilter;
