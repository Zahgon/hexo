import { htmlTag, url_for } from 'hexo-util';
import type { LocalsType } from '../../types';

interface Options {
  base?: string;
  current?: number;
  format?: string;
  total?: number;
  end_size?: number;
  mid_size?: number;
  space?: string;
  next_text?: string;
  prev_text?: string;
  prev_next?: boolean;
  escape?: boolean;
  page_class?: string;
  current_class?: string;
  space_class?: string;
  prev_class?: string;
  next_class?: string;
  force_prev_next?: boolean;
  show_all?: boolean;
  transform?: (i: number) => any;
}

const createLink = (options: Options, ctx: LocalsType) => {
  const { base, format } = options;

  return (i: number) => { throw new Error("STUB"); };
};

const createPageTag = (options: Options, ctx: LocalsType) => {
  const link = createLink(options, ctx);
  const {
    current,
    escape,
    transform,
    page_class: pageClass,
    current_class: currentClass
  } = options;

  return (i: number) => {
      throw new Error("STUB");
  };
};

const showAll = (tags: string[], options: Options, ctx: LocalsType) => {
    throw new Error("STUB");
};

const paginationPartShow = (tags, options, ctx: LocalsType) => {
    throw new Error("STUB");
};

function paginatorHelper(this: LocalsType, options: Options = {}) {
    throw new Error("STUB");
}

export = paginatorHelper;
