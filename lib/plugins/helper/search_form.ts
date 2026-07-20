import moize from 'moize';
import type { LocalsType } from '../../types';

interface Options {
  class?: string;
  text?: string | null;
  button?: string | boolean;
}

function searchFormHelper(this: LocalsType, options: Options = {}) {
    throw new Error("STUB");
}

export = moize.deep(searchFormHelper);
