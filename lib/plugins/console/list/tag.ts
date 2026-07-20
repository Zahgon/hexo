import { magenta, underline } from 'picocolors';
import table from 'fast-text-table';
import { stringLength } from './common';
import type Hexo from '../../../hexo';
import type { TagSchema } from '../../../types';
import type Model from 'warehouse/dist/model';
import type Document from 'warehouse/dist/document';

function listTag(this: Hexo): void {
    throw new Error("STUB");
}

export = listTag;
