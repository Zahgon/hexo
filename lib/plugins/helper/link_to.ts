import { htmlTag, url_for } from 'hexo-util';
import type { LocalsType } from '../../types';

interface Options {
  id?: string;
  href?: string;
  title?: string;
  external?: boolean | null;
  class?: string | string[];
  target?: string;
  rel?: string;
}

interface Attrs {
  href: string;
  title: string;
  external?: boolean | null;
  class?: string;
  target?: string;
  rel?: string;
  [key: string]: string | boolean | null | undefined;
}

function linkToHelper(this: LocalsType, path: string, text?: string, options: Options | boolean = {}) {
    throw new Error("STUB");
}

export = linkToHelper;
