import type { HighlightOptions } from '../../../extend/syntax_highlight';
import type Hexo from '../../../hexo';
import type { RenderData } from '../../../types';

const rBacktick = /^((?:(?:[^\S\r\n]*>){0,3}|[-*+]|[0-9]+\.)[^\S\r\n]*)(`{3,}|~{3,})[^\S\r\n]*((?:.*?[^`\s])?)[^\S\r\n]*\n((?:[\s\S]*?\n)?)(?:(?:[^\S\r\n]*>){0,3}[^\S\r\n]*)\2[^\S\r\n]?(\n+|$)/gm;
const rAllOptions = /([^\s]+)\s+(.+?)\s+(https?:\/\/\S+|\/\S+)\s*(.+)?/;
const rLangCaption = /([^\s]+)\s*(.+)?/;
const rCommentEscape = /(<!--[\s\S]*?-->)/g;
const rAdditionalOptions = /\s((?:line_number|line_threshold|first_line|wrap|mark|language_attr|highlight):\S+)/g;

const escapeSwigTag = (str: string) => str.replace(/{/g, '&#123;').replace(/}/g, '&#125;');

function parseArgs(args: string) {
    throw new Error("STUB");
}

export = (ctx: Hexo): (data: RenderData) => void => {
    throw new Error("STUB");
};
