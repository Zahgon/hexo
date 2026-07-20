import { url_for, escapeHTML } from 'hexo-util';
import moize from 'moize';
import type { LocalsType, TagSchema } from '../../types';
import type Query from 'warehouse/dist/query';

interface Options {
  style?: string | false;
  class?: any;
  amount?: number;
  orderby?: string;
  order?: number;
  transform?: (name: string) => string;
  separator?: string;
  show_count?: boolean;
  suffix?: string;
}

function listTagsHelper(this: LocalsType, tags?: Query<TagSchema> | Options, options?: Options) {
    throw new Error("STUB");
}

function listTagsHelperFactory(tags?: Query<TagSchema> | Options, options?: Options) {
    throw new Error("STUB");
}

export = listTagsHelperFactory;
