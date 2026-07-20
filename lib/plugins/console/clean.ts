import Promise from 'bluebird';
import { exists, unlink, rmdir } from 'hexo-fs';
import type Hexo from '../../hexo';

function cleanConsole(this: Hexo): Promise<[void, void, any]> {
    throw new Error("STUB");
}

function deleteDatabase(ctx: Hexo): Promise<void> {
    throw new Error("STUB");
}

function deletePublicDir(ctx: Hexo): Promise<void> {
    throw new Error("STUB");
}

export = cleanConsole;
