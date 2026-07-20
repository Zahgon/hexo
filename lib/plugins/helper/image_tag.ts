import { htmlTag, url_for } from 'hexo-util';
import type { LocalsType } from '../../types';

interface Options {
  src?: string;
  alt?: string;
  class?: string | string[];
}

interface Attrs {
  src?: string;
  class?: string;
  [key: string]: string | undefined;
}

function imageTagHelper(this: LocalsType, path: string, options: Options = {}) {
    throw new Error("STUB");
}

export = imageTagHelper;
