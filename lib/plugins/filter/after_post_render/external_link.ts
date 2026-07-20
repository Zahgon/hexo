import { isExternalLink } from 'hexo-util';
import type Hexo from '../../../hexo';
import type { RenderData } from '../../../types';

let EXTERNAL_LINK_POST_ENABLED = true;
const rATag = /<a\s[^<>]*?href=["']((?:https?:|\/\/)[^<>"']+)["'][^<>]*>/gi;
const rTargetAttr = /target=/i;
const rRelAttr = /rel=/i;
const rRelStrAttr = /rel=["']([^<>"']*)["']/i;

function externalLinkFilter(this: Hexo, data: RenderData): void {
    throw new Error("STUB");
}

export = externalLinkFilter;
