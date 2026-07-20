import yaml from 'js-yaml';
import { exists, writeFile } from 'hexo-fs';
import { extname } from 'path';
import Promise from 'bluebird';
import type Hexo from '../../hexo';

interface ConfigArgs {
  _: string[]
  [key: string]: any
}

function configConsole(this: Hexo, args: ConfigArgs): Promise<void> {
    throw new Error("STUB");
}

function getProperty(obj: object, key: string): any {
    throw new Error("STUB");
}

function setProperty(obj: object, key: string, value: any): void {
    throw new Error("STUB");
}

function castValue(value: string): any {
    throw new Error("STUB");
}

export = configConsole;
