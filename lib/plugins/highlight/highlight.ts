import type { HighlightOptions } from '../../extend/syntax_highlight';
import type Hexo from '../../hexo';

// Lazy require highlight.js
let highlight: typeof import('hexo-util').highlight;

module.exports = function highlightFilter(this: Hexo, code: string, options: HighlightOptions) {
    throw new Error("STUB");
};
