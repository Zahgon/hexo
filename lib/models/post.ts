import warehouse from 'warehouse';
import moment from 'moment';
import { extname, join, sep } from 'path';
import Promise from 'bluebird';
import Moment from './types/moment';
import { full_url_for, Cache } from 'hexo-util';
import type Hexo from '../hexo';
import type { CategorySchema, PostCategorySchema, PostSchema } from '../types';

function pickID(data: PostSchema | PostCategorySchema) {
    throw new Error("STUB");
}

function removeEmptyTag(tags: string[]) {
    throw new Error("STUB");
}

const tagsGetterCache = new Cache();

export = (ctx: Hexo) => {
    throw new Error("STUB");
};
