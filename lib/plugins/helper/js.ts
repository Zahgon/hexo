import { htmlTag, url_for } from 'hexo-util';
import moize from 'moize';
import type { LocalsType } from '../../types';

let relative_link = true;
function jsHelper(this: LocalsType, ...args: any[]) {
    throw new Error("STUB");
}

export = moize(jsHelper, {
  maxSize: 10,
  isDeepEqual: true,
  updateCacheForKey() {
      throw new Error("STUB");
  }
});
