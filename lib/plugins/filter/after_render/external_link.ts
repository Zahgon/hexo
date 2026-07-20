import { isExternalLink } from 'hexo-util';
import type Hexo from '../../../hexo';

let EXTERNAL_LINK_SITE_ENABLED = true;
const rATag = /<a\s[^<>]*?href=["']((?:https?:|\/\/)[^<>"']+)["'][^<>]*>/gi;
const rTargetAttr = /target=/i;
const rRelAttr = /rel=/i;
const rRelStrAttr = /rel=["']([^<>"']*)["']/i;

const addNoopener = (relStr: string, rel: string) => {
    throw new Error("STUB");
};

function externalLinkFilter(this: Hexo, data: string): string {
    throw new Error("STUB");
}

export = externalLinkFilter;
