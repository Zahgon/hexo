import { Pattern } from 'hexo-util';
import type { _File } from '../../box';
import Theme from '..';

function process(file: _File) {
    throw new Error("STUB");
}

const pattern = new Pattern(/^_config\.\w+$/);

export const config = {
  pattern,
  process
};
