// Based on: https://raw.github.com/imathis/octopress/master/plugins/code_block.rb

import { escapeHTML, htmlTag } from 'hexo-util';
import type Hexo from '../../hexo';
import type { HighlightOptions } from '../../extend/syntax_highlight';

const rCaptionUrlTitle = /(\S[\S\s]*)\s+(https?:\/\/\S+)\s+(.+)/i;
const rCaptionUrl = /(\S[\S\s]*)\s+(https?:\/\/\S+)/i;
const rCaption = /\S[\S\s]*/;

/**
 * Code block tag
 * Syntax:
 * {% codeblock [options] %}
 * code snippet
 * {% endcodeblock %}
 * @param {String} title Caption text
 * @param {Object} lang Specify language
 * @param {String} url Source link
 * @param {String} link_text Text of the link
 * @param {Object} line_number Show line number, value must be a boolean
 * @param {Object} highlight Enable code highlighting, value must be a boolean
 * @param {Object} first_line Specify the first line number, value must be a number
 * @param {Object} mark Line highlight specific line(s), each value separated by a comma. Specify number range using a dash
 * Example: `mark:1,4-7,10` will mark line 1, 4 to 7 and 10.
 * @param {Object} wrap Wrap the code block in <table>, value must be a boolean
 * @returns {String} Code snippet with code highlighting
*/

function parseArgs(args: string[]): HighlightOptions {
    throw new Error("STUB");
}

export = (ctx: Hexo) => { throw new Error("STUB"); };
