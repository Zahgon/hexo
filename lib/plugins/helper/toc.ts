import { tocObj, escapeHTML } from 'hexo-util';

interface Options {
  min_depth?: number;
  max_depth?: number;
  max_items?: number;
  class?: string;
  class_item?: string;
  class_link?: string;
  class_text?: string;
  class_child?: string;
  class_number?: string;
  class_level?: string;
  list_number?: boolean;
}

/**
 * Hexo TOC helper: generates a nested <ol> list from markdown headings
 * @param {string} str      Raw markdown/html string
 * @param {Options} options Configuration options
 */
function tocHelper(str, options: Options = {}) {
    throw new Error("STUB");
}

/**
 * Extract flat TOC data and enforce max_items
 */
function getAndTruncateTocObj(str, { min_depth, max_depth }, max_items) {
    throw new Error("STUB");
}

/**
 * Build nested tree from flat heading list
 */
function buildTree(headings) {
    throw new Error("STUB");
}

/**
 * Assign hierarchical numbering to each node
 */
function assignNumbers(nodes) {
    throw new Error("STUB");
}

export = tocHelper;
