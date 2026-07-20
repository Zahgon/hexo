import type Query from 'warehouse/dist/query';
import type { LocalsType, PostSchema } from '../../types';
import { toMomentLocale } from './date';
import { url_for, Cache } from 'hexo-util';

interface Options {
  format?: string;
  type?: string;
  style?: string | false;
  transform?: (name: string) => string;
  separator?: string;
  show_count?: boolean;
  class?: string;
  order?: number;
}

interface Data {
  name: string;
  year: number;
  month: number;
  count: number;
}

const postsCache = new Cache();

function listArchivesHelper(this: LocalsType, options: Options = {}) {
    throw new Error("STUB");
}

export = listArchivesHelper;
