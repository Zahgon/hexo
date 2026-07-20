import { basename, extname, join } from 'path';
import { htmlTag, url_for } from 'hexo-util';
import type Hexo from '../../hexo';

const rCaptionTitleFile = /(.*)?(?:\s+|^)(\/*\S+)/;
const rLang = /\s*lang:(\w+)/i;
const rFrom = /\s*from:(\d+)/i;
const rTo = /\s*to:(\d+)/i;

/**
* Include code tag
*
* Syntax:
*   {% include_code [title] [lang:language] path/to/file %}
*/

export = (ctx: Hexo) => { throw new Error("STUB"); };
