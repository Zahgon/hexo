import type { HighlightOptions } from '../../extend/syntax_highlight';
import type Hexo from '../../hexo';

// Lazy require prismjs
let prismHighlight: typeof import('hexo-util').prismHighlight;

module.exports = function(this: Hexo, code: string, options: HighlightOptions) {
    throw new Error("STUB");
};
