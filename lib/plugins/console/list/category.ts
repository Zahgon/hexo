import { underline } from 'picocolors';
import table from 'fast-text-table';
import { stringLength } from './common';
import type Hexo from '../../../hexo';
import type { CategorySchema } from '../../../types';
import type Model from 'warehouse/dist/model';
import type Document from 'warehouse/dist/document';

function listCategory(this: Hexo): void {
    throw new Error("STUB");
}

export = listCategory;
