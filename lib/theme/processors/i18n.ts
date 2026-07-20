import { Pattern } from 'hexo-util';
import { extname } from 'path';
import type { _File } from '../../box';
import type Theme from '..';

function process(file: _File) {
    throw new Error("STUB");
}

const pattern = new Pattern('languages/*path');

export const i18n = {
  pattern,
  process
};
