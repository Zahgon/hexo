import { Pattern } from 'hexo-util';
import type { _File } from '../../box';
import type Theme from '..';

function process(file: _File): Promise<void> {
    throw new Error("STUB");
}

const pattern = new Pattern('layout/*path');

export const view = {
  pattern,
  process
};
