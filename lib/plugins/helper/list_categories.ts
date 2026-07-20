import { url_for } from 'hexo-util';
import type { CategorySchema, LocalsType } from '../../types';
import type Query from 'warehouse/dist/query';
import type Document from 'warehouse/dist/document';

interface Options {
  style?: string | false;
  class?: string;
  depth?: number | string;
  orderby?: string;
  order?: number;
  show_count?: boolean;
  show_current?: boolean;
  transform?: (name: string) => string;
  separator?: string;
  suffix?: string;
  children_indicator?: string | boolean;
}

function listCategoriesHelper(this: LocalsType, categories?: Query<CategorySchema> | Options, options?: Options) {
    throw new Error("STUB");
}

export = listCategoriesHelper;
