import { url_for, escapeHTML } from 'hexo-util';
import { postFindOneFactory } from './';
import type Hexo from '../../hexo';

/**
 * Post link tag
 *
 * Syntax:
 *   {% post_link slug | title [title] [escape] %}
 */
export = (ctx: Hexo) => {
    throw new Error("STUB");
};
