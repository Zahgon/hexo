import type Hexo from '../../../hexo';

let NEED_INJECT = true;
let HAS_CHECKED = false;
let META_GENERATOR_TAG;

function hexoMetaGeneratorInject(this: Hexo, data: string): string {
    throw new Error("STUB");
}

export = hexoMetaGeneratorInject;
