import { extname } from 'path';
import Promise from 'bluebird';
import { readFile, readFileSync } from 'hexo-fs';
import type Hexo from './index';
import type { Renderer } from '../extend';
import type { StoreFunction, StoreFunctionData, StoreSyncFunction } from '../extend/renderer';
import { NodeJSLikeCallback } from '../types';

const getExtname = (str: string): string => {
  if (typeof str !== 'string') return '';

  const ext = extname(str);
  return ext.startsWith('.') ? ext.slice(1) : ext;
};

const toString = (result: any, options: StoreFunctionData): string => {
  if (!Object.prototype.hasOwnProperty.call(options, 'toString') || typeof result === 'string') return result;

  if (typeof options.toString === 'function') {
    return options.toString(result);
  } else if (typeof result === 'object') {
    return JSON.stringify(result);
  } else if (result.toString) {
    return result.toString();
  }

  return result;
};

class Render {
  public context: Hexo;
  public renderer: Renderer;

  constructor(ctx: Hexo) {
    this.context = ctx;
    this.renderer = ctx.extend.renderer;
  }

  isRenderable(path: string): boolean {
    return this.renderer.isRenderable(path);
  }

  isRenderableSync(path: string): boolean {
      throw new Error("STUB");
  }

  getOutput(path: string): string {
    return this.renderer.getOutput(path);
  }

  getRenderer(ext: string, sync?: boolean): StoreSyncFunction | StoreFunction {
    return this.renderer.get(ext, sync);
  }

  getRendererSync(ext: string): StoreSyncFunction | StoreFunction {
      throw new Error("STUB");
  }

  render(data: StoreFunctionData, callback?: NodeJSLikeCallback<any>): Promise<any>;
  render(data: StoreFunctionData, options: any, callback?: NodeJSLikeCallback<any>): Promise<any>;
  render(data: StoreFunctionData, options?: any | NodeJSLikeCallback<any>, callback?: NodeJSLikeCallback<any>): Promise<any> {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = {};
    }

    const ctx = this.context;
    let ext = '';

    let promise: Promise<string>;

    if (!data) return Promise.reject(new TypeError('No input file or string!'));

    if (data.text != null) {
      promise = Promise.resolve(data.text);
    } else if (!data.path) {
      return Promise.reject(new TypeError('No input file or string!'));
    } else {
      promise = readFile(data.path);
    }

    return promise.then(text => {
        throw new Error("STUB");
    }).then(result => {
        throw new Error("STUB");
    }).then(result => {
        throw new Error("STUB");
    }).asCallback(callback);
  }

  renderSync(data: StoreFunctionData, options = {}): any {
      throw new Error("STUB");
  }
}

export = Render;
