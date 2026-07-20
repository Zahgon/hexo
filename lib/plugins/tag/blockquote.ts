// Based on: https://raw.github.com/imathis/octopress/master/plugins/blockquote.rb

import titlecase from 'titlecase';
import type Hexo from '../../hexo';

const rFullCiteWithTitle = /(\S.*)\s+(https?:\/\/\S+)\s+(.+)/i;
const rFullCite = /(\S.*)\s+(https?:\/\/\S+)/i;
const rAuthorTitle = /([^,]+),\s*([^,]+)/;

/**
 * @param {string[]} args
 * @param {Hexo} ctx
 */
const parseFooter = (args: string[], ctx: Hexo) => {
    throw new Error("STUB");
};

/**
* Blockquote tag
*
* Syntax:
*   {% blockquote [author[, source]] [link] [source_link_title] %}
*   Quote string
*   {% endblockquote %}
*/

export = (ctx: Hexo) => { throw new Error("STUB"); };
