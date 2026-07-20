import { url_for } from 'hexo-util';
import moize from 'moize';
import type { LocalsType } from '../../types';

const feedFn = (str = '') => {
    throw new Error("STUB");
};

interface Options {
  title?: string;
  type?: string | null;
}

function makeFeedTag(this: LocalsType, path?: string, options: Options = {}, configFeed?: any, configTitle?: string) {
    throw new Error("STUB");
}

function feedTagHelper(this: LocalsType, path?: string, options: Options = {}) {
    throw new Error("STUB");
}

export = feedTagHelper;
