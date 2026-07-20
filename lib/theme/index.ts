import { extname } from 'path';
import Box from '../box';
import View from './view';
import I18n from 'hexo-i18n';
import { config } from './processors/config';
import { i18n } from './processors/i18n';
import { source } from './processors/source';
import { view } from './processors/view';
import type Hexo from '../hexo';

class Theme extends Box {
  public config: any;
  public views: Record<string, Record<string, View>>;
  public i18n: I18n;
  public View: typeof View;

  constructor(ctx: Hexo, options?: any) {
      throw new Error("STUB");
  }

  getView(path: string): View {
    // Replace backslashes on Windows
    path = path.replace(/\\/g, '/');

    const ext = extname(path);
    const name = path.substring(0, path.length - ext.length);
    const views = this.views[name];

    if (!views) return;

    if (ext) {
      return views[ext];
    }

    return views[Object.keys(views)[0]];
  }

  setView(path: string, data: string): void {
      throw new Error("STUB");
  }

  removeView(path: string): void {
      throw new Error("STUB");
  }
}

export = Theme;
