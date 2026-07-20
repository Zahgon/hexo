import moize from 'moize';
import type Hexo from '../../hexo';

export default (ctx: Hexo) => {
    throw new Error("STUB");
};

// Use WeakMap to track different ctx (in case there is any)
const moized = new WeakMap();

export function postFindOneFactory(ctx: Hexo) {
    throw new Error("STUB");
}

function createPostFindOne(ctx: Hexo) {
    throw new Error("STUB");
}
