import Promise from 'bluebird';
import { sep, join, dirname } from 'path';
import tildify from 'tildify';
import Database from 'warehouse';
import { magenta, underline } from 'picocolors';
import { EventEmitter } from 'events';
import { readFile } from 'hexo-fs';
import Module, { createRequire } from 'module';
import { runInThisContext } from 'vm';
const { version } = require('../../package.json');
import logger from 'hexo-log';

import {
  Console,
  Deployer,
  Filter,
  Generator,
  Helper,
  Highlight,
  Injector,
  Migrator,
  Processor,
  Renderer,
  Tag
} from '../extend';

import Render from './render';
import registerModels from './register_models';
import Post from './post';
import Scaffold from './scaffold';
import Source from './source';
import Router from './router';
import Theme from '../theme';
import Locals from './locals';
import defaultConfig from './default_config';
import loadDatabase from './load_database';
import multiConfigPath from './multi_config_path';
import { deepMerge, full_url_for } from 'hexo-util';
import type Box from '../box';
import type { BaseGeneratorReturn, FilterOptions, LocalsType, NodeJSLikeCallback, SiteLocals } from '../types';
import type { AddSchemaTypeOptions } from 'warehouse/dist/types';
import type Schema from 'warehouse/dist/schema';
import BinaryRelationIndex from '../models/binary_relation_index';

const libDir = dirname(__dirname);
const dbVersion = 1;

const stopWatcher = (box: Box) => { if (box.isWatching()) box.unwatch(); };

const routeCache = new WeakMap();

const castArray = (obj: any) => { return Array.isArray(obj) ? obj : [obj]; };

const mergeCtxThemeConfig = (ctx: Hexo) => {
    throw new Error("STUB");
};

const createLoadThemeRoute = function(generatorResult: BaseGeneratorReturn, locals: LocalsType, ctx: Hexo) {
    throw new Error("STUB");
};

function debounce(func: () => void, wait: number): () => void {
    throw new Error("STUB");
}

interface Args {

  /**
   * Enable debug mode. Display debug messages in the terminal and save debug.log in the root directory.
   */
  debug?: boolean;

  /**
   * Enable safe mode. Don’t load any plugins.
   */
  safe?: boolean;

  /**
   * Enable silent mode. Don’t display any messages in the terminal.
   */
  silent?: boolean;

  /**
   * Enable to add drafts to the posts list.
   */
  draft?: boolean;

    /**
   * Enable to add drafts to the posts list.
   */
  drafts?: boolean;
  _?: string[];
  output?: string;

  /**
   * Specify the path of the configuration file.
   */
  config?: string;
  [key: string]: any;
}

interface Query {
  date?: any;
  published?: boolean;
}

interface Extend {
  console: Console,
  deployer: Deployer,
  filter: Filter,
  generator: Generator,
  helper: Helper,
  highlight: Highlight,
  injector: Injector,
  migrator: Migrator,
  processor: Processor,
  renderer: Renderer,
  tag: Tag
}

interface Env {
  args: Args;
  debug: boolean;
  safe: boolean;
  silent: boolean;
  env: string;
  version: string;
  cmd: string;
  init: boolean;
}

type DefaultConfigType = typeof defaultConfig;
interface Config extends DefaultConfigType {
  [key: string]: any;
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
interface Hexo {

  /**
   * Emitted before deployment begins.
   * @param event
   * @param listener
   * @link https://hexo.io/api/events.html#deployBefore
   */
  on(event: 'deployBefore', listener: (...args: any[]) => any): this;

  /**
   * Emitted after deployment begins.
   * @param event
   * @param listener
   * @link https://hexo.io/api/events.html#deployAfter
   */
  on(event: 'deployAfter', listener: (...args: any[]) => any): this;

  /**
   * Emitted before Hexo exits.
   * @param event
   * @param listener
   * @link https://hexo.io/api/events.html#exit
   */
  on(event: 'exit', listener: (...args: any[]) => any): this;

  /**
   * Emitted before generation begins.
   * @param event
   * @param listener
   * @link https://hexo.io/api/events.html#generateBefore
   */
  on(event: 'generateBefore', listener: (...args: any[]) => any): this;

  /**
   * Emitted after generation finishes.
   * @param event
   * @param listener
   * @link https://hexo.io/api/events.html#generateAfter
   */
  on(event: 'generateAfter', listener: (...args: any[]) => any): this;

  /**
   * Emitted after a new post has been created. This event returns the post data:
   * @param event
   * @param listener
   * @link https://hexo.io/api/events.html#new
   */
  on(event: 'new', listener: (post: { path: string; content: string; }) => any): this;

  /**
   * Emitted before processing begins. This event returns a path representing the root directory of the box.
   * @param event
   * @param listener
   * @link https://hexo.io/api/events.html#processBefore
   */
  on(event: 'processBefore', listener: (...args: any[]) => any): this;

  /**
   * Emitted after processing finishes. This event returns a path representing the root directory of the box.
   * @param event
   * @param listener
   * @link https://hexo.io/api/events.html#processAfter
   */
  on(event: 'processAfter', listener: (...args: any[]) => any): this;

  /**
   * Emitted after initialization finishes.
   * @param event
   * @param listener
   */
  on(event: 'ready', listener: (...args: any[]) => any): this;

  /**
   * undescripted on emit
   * @param event
   * @param listener
   */
  on(event: string, listener: (...args: any[]) => any): any;
  emit(event: string, ...args: any[]): any;
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
class Hexo extends EventEmitter {
  public base_dir: string;
  public public_dir: string;
  public source_dir: string;
  public plugin_dir: string;
  public script_dir: string;
  public scaffold_dir: string;
  public theme_dir: string;
  public theme_script_dir: string;
  public env: Env;
  public extend: Extend;
  public config: Config;
  public log: ReturnType<typeof logger>;
  public render: Render;
  public route: Router;
  public post: Post;
  public scaffold: Scaffold;
  public _dbLoaded: boolean;
  public _isGenerating: boolean;
  public database: Database;
  public config_path: string;
  public source: Source;
  public theme: Theme;
  public locals: Locals;
  public version: string;
  public _watchBox: () => void;
  public lib_dir: string;
  public core_dir: string;
  static lib_dir: string;
  static core_dir: string;
  static version: string;
  public _binaryRelationIndex: {
    post_tag: BinaryRelationIndex<'post_id', 'tag_id'>;
    post_category: BinaryRelationIndex<'post_id', 'category_id'>;
  };

  constructor(base = process.cwd(), args: Args = {}) {
      throw new Error("STUB");
  }

  _bindLocals(): void {
      throw new Error("STUB");
  }

  /**
   * Load configuration and plugins.
   * @returns {Promise}
   * @link https://hexo.io/api#Initialize
   */
  init(): Promise<void> {
      throw new Error("STUB");
  }

  /**
   * Call any console command explicitly.
   * @param name
   * @param args
   * @param callback
   * @returns {Promise}
   * @link https://hexo.io/api#Execute-Commands
   */
  call(name: string, callback?: NodeJSLikeCallback<any>): Promise<any>;
  call(name: string, args: object, callback?: NodeJSLikeCallback<any>): Promise<any>;
  call(name: string, args?: object | NodeJSLikeCallback<any>, callback?: NodeJSLikeCallback<any>): Promise<any> {
    if (!callback && typeof args === 'function') {
      callback = args as NodeJSLikeCallback<any>;
      args = {};
    }

    const c = this.extend.console.get(name);

    if (c) return (Reflect.apply(c, this, [args]) as any).asCallback(callback);
    return Promise.reject(new Error(`Console \`${name}\` has not been registered yet!`));
  }

  model(name: string, schema?: Schema | Record<string, AddSchemaTypeOptions>) {
    return this.database.model(name, schema);
  }

  resolvePlugin(name: string, basedir: string): string {
      throw new Error("STUB");
  }

  loadPlugin(path: string, callback?: NodeJSLikeCallback<any>): Promise<any> {
      throw new Error("STUB");
  }

  _showDrafts(): boolean {
      throw new Error("STUB");
  }

  /**
   * Load all files in the source folder as well as the theme data.
   * @param callback
   * @returns {Promise}
   * @link https://hexo.io/api#Load-Files
   */
  load(callback?: NodeJSLikeCallback<any>): Promise<any> {
      throw new Error("STUB");
  }

  /**
   * Load all files in the source folder as well as the theme data.
   * Start watching for file changes continuously.
   * @param callback
   * @returns {Promise}
   * @link https://hexo.io/api#Load-Files
   */
  watch(callback?: NodeJSLikeCallback<any>): Promise<any> {
      throw new Error("STUB");
  }

  unwatch(): void {
    if (this._watchBox != null) {
      this.source.removeListener('processAfter', this._watchBox);
      this.theme.removeListener('processAfter', this._watchBox);

      this._watchBox = null;
    }

    stopWatcher(this.source);
    stopWatcher(this.theme);
  }

  _generateLocals() {
      throw new Error("STUB");
  }

  _runGenerators(): Promise<BaseGeneratorReturn[]> {
      throw new Error("STUB");
  }

  _routerRefresh(runningGenerators: Promise<BaseGeneratorReturn[]>, useCache: boolean): Promise<void> {
      throw new Error("STUB");
  }

  _generate(options: { cache?: boolean } = {}): Promise<any> {
      throw new Error("STUB");
  }

  /**
   * Exit gracefully and finish up important things such as saving the database.
   * @param err
   * @returns {Promise}
   * @link https://hexo.io/api/#Exit
   */
  exit(err?: any): Promise<void> {
      throw new Error("STUB");
  }

  execFilter(type: string, data: any, options?: FilterOptions) {
    return this.extend.filter.exec(type, data, options);
  }

  execFilterSync(type: string, data: any, options?: FilterOptions) {
      throw new Error("STUB");
  }
}

Hexo.lib_dir = libDir + sep;
Hexo.prototype.lib_dir = Hexo.lib_dir;

Hexo.core_dir = dirname(libDir) + sep;
Hexo.prototype.core_dir = Hexo.core_dir;

Hexo.version = version;
Hexo.prototype.version = Hexo.version;

// define global variable
// this useful for plugin written in typescript
declare global {
  const hexo: Hexo;
}

export = Hexo;
