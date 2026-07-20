import { dirname, extname, join } from 'path';
import { parse as yfm } from 'hexo-front-matter';
import Promise from 'bluebird';
import type Theme from '.';
import type Render from '../hexo/render';
import type { NodeJSLikeCallback } from '../types';
import type { Helper } from '../extend';

const assignIn = (target: any, ...sources: any[]) => {
  const length = sources.length;

  if (length < 1 || target == null) return target;
  for (let i = 0; i < length; i++) {
    const source = sources[i];

    for (const key in source) {
      target[key] = source[key];
    }
  }
  return target;
};

class Options {
  layout?: any;
  [key: string]: any;
}

class View {
  public path: string;
  public source: string;
  public _theme: Theme;
  public data: any;
  public _compiled: (locals: any) => Promise<any>;
  public _compiledSync: (locals: any) => any;
  public _helper: Helper;
  public _render: Render;

  constructor(path: string, data: string) {
      throw new Error("STUB");
  }

  render(callback: NodeJSLikeCallback<any>): Promise<any>;
  render(options: Options, callback?: NodeJSLikeCallback<any>): Promise<any>;
  render(options: Options | NodeJSLikeCallback<any> = {}, callback?: NodeJSLikeCallback<any>): Promise<any> {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = {};
    }
    const { data } = this;
    const { layout = (options as Options).layout } = data;
    const locals = this._buildLocals(options as Options);

    return this._compiled(this._bindHelpers(locals)).then(result => {
        throw new Error("STUB");
    }).asCallback(callback);
  }

  renderSync(options: Options = {}) {
      throw new Error("STUB");
  }

  _buildLocals(locals: Options) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { layout, _content, ...data } = this.data;
    return assignIn({}, locals, data, {
      filename: this.source
    });
  }

  _bindHelpers(locals) {
    const helpers = this._helper.list();
    const keys = Object.keys(helpers);

    for (const key of keys) {
      locals[key] = helpers[key].bind(locals);
    }

    return locals;
  }

  _resolveLayout(name: string): View {
    // Relative path
    const layoutPath = join(dirname(this.path), name);
    let layoutView = this._theme.getView(layoutPath);

    if (layoutView && layoutView.source !== this.source) return layoutView;

    // Absolute path
    layoutView = this._theme.getView(name);
    if (layoutView && layoutView.source !== this.source) return layoutView;
  }

  _precompile(): void {
      throw new Error("STUB");
  }
}

export = View;
