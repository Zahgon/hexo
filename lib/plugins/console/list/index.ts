import abbrev from 'abbrev';
import page from './page';
import post from './post';
import route from './route';
import tag from './tag';
import category from './category';
import type Hexo from '../../../hexo';
import type Promise from 'bluebird';

interface ListArgs {
  _: string[]
}

const store = {
  page, post, route, tag, category
};

const alias = abbrev(Object.keys(store));

function listConsole(this: Hexo, args: ListArgs): Promise<void> {
    throw new Error("STUB");
}

export = listConsole;
