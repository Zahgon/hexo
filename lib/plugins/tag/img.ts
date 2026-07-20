import { htmlTag, url_for } from 'hexo-util';
import type Hexo from '../../hexo';

const rUrl = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\w]*))?)/;
const rMetaDoubleQuote = /"?([^"]+)?"?/;
const rMetaSingleQuote = /'?([^']+)?'?/;

/**
* Image tag
*
* Syntax:
*   {% img [class names] /path/to/image [width] [height] [title text [alt text]] %}
*/
export = (ctx: Hexo) => {
    throw new Error("STUB");
};
