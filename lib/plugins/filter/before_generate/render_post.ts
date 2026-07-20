import Promise from 'bluebird';
import type Hexo from '../../../hexo';
import type Model from 'warehouse/dist/model';

function renderPostFilter(this: Hexo): Promise<[any[], any[]]> {
    throw new Error("STUB");
}

export = renderPostFilter;
