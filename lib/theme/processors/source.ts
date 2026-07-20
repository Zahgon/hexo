import { Pattern } from 'hexo-util';
import * as common from '../../plugins/processor/common';
import type { _File } from '../../box';

function process(file: _File) {
    throw new Error("STUB");
}

const pattern = new Pattern(path => {
    throw new Error("STUB");
});

export const source = {
  pattern,
  process
};
