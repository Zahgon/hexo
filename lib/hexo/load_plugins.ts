import { join } from 'path';
import { exists, readFile, listDir } from 'hexo-fs';
import Promise from 'bluebird';
import { magenta } from 'picocolors';
import type Hexo from './index';

export = (ctx: Hexo): Promise<void[][]> => {
    throw new Error("STUB");
};

function loadModuleList(ctx: Hexo, basedir: string): Promise<Record<string, string>> {
    throw new Error("STUB");
}

function loadModules(ctx: Hexo): Promise<void[]> {
    throw new Error("STUB");
}

function loadScripts(ctx: Hexo): Promise<void[][]> {
    throw new Error("STUB");
}

function displayPath(path: string, baseDirLength: number): string {
    throw new Error("STUB");
}
