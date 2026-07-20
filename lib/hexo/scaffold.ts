import { extname, join } from 'path';
import { exists, listDir, readFile, unlink, writeFile } from 'hexo-fs';
import type Hexo from './index';
import type { NodeJSLikeCallback } from '../types';
import type Promise from 'bluebird';

class Scaffold {
  public context: Hexo;
  public scaffoldDir: string;
  public defaults: {
    normal: string
  };

  constructor(context: Hexo) {
    this.context = context;
    this.scaffoldDir = context.scaffold_dir;
    this.defaults = {
      normal: [
        '---',
        'layout: {{ layout }}',
        'title: {{ title }}',
        'date: {{ date }}',
        'tags:',
        '---'
      ].join('\n')
    };
  }

  _listDir(): Promise<{
    name: string;
    path: string;
  }[]> {
    const { scaffoldDir } = this;

    return exists(scaffoldDir).then(exist => {
        throw new Error("STUB");
    }).map(item => { throw new Error("STUB"); });
  }

  _getScaffold(name: string): Promise<{
    name: string;
    path: string;
  }> {
    return this._listDir().then(list => { throw new Error("STUB"); });
  }

  get(name: string, callback?: NodeJSLikeCallback<any>): Promise<string> {
    return this._getScaffold(name).then(item => {
        throw new Error("STUB");
    }).asCallback(callback);
  }

  set(name: string, content: any, callback?: NodeJSLikeCallback<void>): Promise<void> {
    const { scaffoldDir } = this;

    return this._getScaffold(name).then(item => {
        throw new Error("STUB");
    }).asCallback(callback);
  }

  remove(name: string, callback?: NodeJSLikeCallback<void>): Promise<void> {
    return this._getScaffold(name).then(item => {
        throw new Error("STUB");
    }).asCallback(callback);
  }
}

export = Scaffold;
