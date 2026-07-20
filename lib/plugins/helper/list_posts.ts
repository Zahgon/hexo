import { url_for } from 'hexo-util';
import type { LocalsType, PostSchema } from '../../types';
import type Query from 'warehouse/dist/query';

interface Options {
  style?: string | false;
  class?: string;
  amount?: number;
  orderby?: string;
  order?: number;
  transform?: (name: string) => string;
  separator?: string;
}

function listPostsHelper(this: LocalsType, posts?: Query<PostSchema> | Options, options?: Options) {
    throw new Error("STUB");
}

export = listPostsHelper;
