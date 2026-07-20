import { join, sep } from 'path';
import BlueBirdPromise from 'bluebird';
import File from './file';
import { Pattern, createSha1Hash } from 'hexo-util';
import { createReadStream, readdir, stat, watch } from 'hexo-fs';
import { magenta } from 'picocolors';
import { EventEmitter } from 'events';
import { isMatch, makeRe } from 'micromatch';
import type Hexo from '../hexo';
import type { NodeJSLikeCallback } from '../types';
import type fs from 'fs';

const defaultPattern = new Pattern(() => { throw new Error("STUB"); });

interface Processor {
  pattern: Pattern;
  process: (file?: File) => any;
}

interface BoxOptions {
  persistent: boolean;
  awaitWriteFinish: { stabilityThreshold: number };
  ignored: RegExp[];
  [key: string]: any;
}

class Box extends EventEmitter {
  public options: BoxOptions;
  public context: Hexo;
  public base: string;
  public processors: Processor[];
  public _processingFiles: Record<string, boolean>;
  public watcher: Awaited<ReturnType<typeof watch>> | null;
  public Cache: any;
  // TODO: replace runtime class _File
  public File: any;
  public ignore: string[];

  constructor(ctx: Hexo, base: string, options?: any) {
      throw new Error("STUB");
  }

  _createFileClass() {
      throw new Error("STUB");
  }

  addProcessor(pattern: (...args: any[]) => any): void;
  addProcessor(pattern: string | RegExp | Pattern | ((str: string) => any), fn: (...args: any[]) => any): void;
  addProcessor(pattern: string | RegExp | Pattern | ((str: string) => any), fn?: (...args: any[]) => any): void {
      throw new Error("STUB");
  }

  _readDir(base: string, prefix = ''): BlueBirdPromise<string[]> {
      throw new Error("STUB");
  }

  _checkFileStatus(path: string): { type: string; path: string } {
      throw new Error("STUB");
  }

  process(callback?: NodeJSLikeCallback<any>): BlueBirdPromise<void | (string | void)[]> {
      throw new Error("STUB");
  }

  _processFile(type: string, path: string): BlueBirdPromise<void | string> {
      throw new Error("STUB");
  }

  watch(callback?: NodeJSLikeCallback<never>): BlueBirdPromise<void> {
      throw new Error("STUB");
  }

  unwatch(): void {
    if (!this.isWatching()) return;

    this.watcher.close();
    this.watcher = null;
  }

  isWatching(): boolean {
    return Boolean(this.watcher);
  }
}

function escapeBackslash(path: string): string {
    throw new Error("STUB");
}

function getHash(path: string): BlueBirdPromise<string> {
    throw new Error("STUB");
}

function toRegExp(ctx: Hexo, arg: string): RegExp | null {
    throw new Error("STUB");
}

function isIgnoreMatch(path: string, ignore: string | string[]): boolean {
    throw new Error("STUB");
}

function readDirWalker(ctx: Hexo, base: string, results: string[], ignore: string | string[], prefix: string): BlueBirdPromise<any> {
    throw new Error("STUB");
}

export interface _File extends File {
  box: Box;
  render(options?: any): any;
  renderSync(options?: any): any;
}

export default Box;
