import { Pattern } from 'hexo-util';
import type Hexo from '../../../hexo';
import type { LocalsType } from '../../../types';

function i18nLocalsFilter(this: Hexo, locals: LocalsType): void {
    throw new Error("STUB");
}

export = i18nLocalsFilter;
