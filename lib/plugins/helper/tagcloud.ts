import { Color, url_for } from 'hexo-util';
import moize from 'moize';
import type { LocalsType, TagSchema } from '../../types';
import type Query from 'warehouse/dist/query';

interface Options {
  min_font?: number;
  max_font?: number;
  orderby?: string;
  order?: number;
  unit?: string;
  color?: boolean;
  class?: string;
  show_count?: boolean;
  count_class?: string;
  level?: number;
  transform?: (name: string) => string;
  separator?: string;
  amount?: number;
  start_color?: string;
  end_color?: string;
}

function tagcloudHelper(this: LocalsType, tags?: Query<TagSchema> | Options, options?: Options) {
    throw new Error("STUB");
}

function tagcloudHelperFactory(this: LocalsType, tags?: Query<TagSchema> | Options, options?: Options) {
    throw new Error("STUB");
}

export = tagcloudHelperFactory;
