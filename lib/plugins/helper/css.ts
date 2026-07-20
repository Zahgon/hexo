import { htmlTag, url_for } from 'hexo-util';
import moize from 'moize';
import type { LocalsType } from '../../types';

let relative_link = true;
function cssHelper(this: LocalsType, ...args: any[]) {
    throw new Error("STUB");
}

export = moize(cssHelper, {
  maxSize: 10,
  isDeepEqual: true,
  updateCacheForKey() {
      throw new Error("STUB");
  }
});
