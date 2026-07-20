import { exists, unlink } from 'hexo-fs';
import Promise from 'bluebird';
import type Hexo from './index';

export = (ctx: Hexo): Promise<void> => {
    throw new Error("STUB");
};
