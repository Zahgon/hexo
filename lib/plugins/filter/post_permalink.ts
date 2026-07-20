import { createSha1Hash, Permalink, slugize } from 'hexo-util';
import { basename } from 'path';
import type Hexo from '../../hexo';
import type { PostSchema } from '../../types';

let permalink: Permalink;

function postPermalinkFilter(this: Hexo, data: PostSchema): string {
    throw new Error("STUB");
}

export = postPermalinkFilter;
