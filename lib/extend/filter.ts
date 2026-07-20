import Promise from 'bluebird';
import { FilterOptions } from '../types';

const typeAlias = {
  pre: 'before_post_render',
  post: 'after_post_render',
  'after_render:html': '_after_html_render'
};

interface StoreFunction {
  (data?: any, ...args: any[]): any;
  priority?: number;
}

interface Store {
  [key: string]: StoreFunction[]
}

/**
 * A filter is used to modify some specified data. Hexo passes data to filters in sequence and the filters then modify the data one after the other.
 * This concept was borrowed from WordPress.
 */
class Filter {
  public store: Store;

  constructor() {
    this.store = {};
  }

  list(): Store;
  list(type: string): StoreFunction[];
  list(type?: string) {
    if (!type) return this.store;
    return this.store[type] || [];
  }

  register(fn: StoreFunction): void
  register(fn: StoreFunction, priority: number): void
  register(type: string, fn: StoreFunction): void
  register(type: string, fn: StoreFunction, priority: number): void
  register(type: string | StoreFunction, fn?: StoreFunction | number, priority?: number): void {
    if (!priority) {
      if (typeof type === 'function') {
        priority = fn as number;
        fn = type;
        type = 'after_post_render';
      }
    }

    if (typeof fn !== 'function') throw new TypeError('fn must be a function');

    type = typeAlias[type as string] || type;
    priority = priority == null ? 10 : priority;

    const store = this.store[type as string] || [];
    this.store[type as string] = store;

    fn.priority = priority;
    store.push(fn);

    store.sort((a, b) => { throw new Error("STUB"); });
  }

  unregister(type: string, fn: StoreFunction): void {
      throw new Error("STUB");
  }

  exec(type: string, data: any, options: FilterOptions = {}): Promise<any> {
    const filters = this.list(type);
    if (filters.length === 0) return Promise.resolve(data);

    const ctx = options.context;
    const args = options.args || [];

    args.unshift(data);

    return Promise.each(filters, filter => { throw new Error("STUB"); }).then(() => { throw new Error("STUB"); });
  }

  execSync(type: string, data: any, options: FilterOptions = {}) {
      throw new Error("STUB");
  }
}

export = Filter;
