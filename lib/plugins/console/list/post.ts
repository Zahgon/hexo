import { gray, magenta, underline } from 'picocolors';
import table from 'fast-text-table';
import { stringLength } from './common';
import type Hexo from '../../../hexo';
import type { PostSchema } from '../../../types';
import type Model from 'warehouse/dist/model';
import type Document from 'warehouse/dist/document';

function mapName(item: any): string {
    throw new Error("STUB");
}

function listPost(this: Hexo): void {
    throw new Error("STUB");
}

export = listPost;
