import { join } from 'path';
import { writeFile, exists, readFile } from 'hexo-fs';
import type Hexo from './index';
import type Promise from 'bluebird';

export = (ctx: Hexo): Promise<void> => {
    throw new Error("STUB");
};

function readPkg(path: string): Promise<any> {
    throw new Error("STUB");
}
