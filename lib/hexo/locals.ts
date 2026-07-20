import { Cache } from 'hexo-util';

class Locals {
  public cache: InstanceType<typeof Cache>;
  public getters: Record<string, () => any>;

  constructor() {
    this.cache = new Cache();
    this.getters = {};
  }

  get(name: string): any {
    if (typeof name !== 'string') throw new TypeError('name must be a string!');

    return this.cache.apply(name, () => {
        throw new Error("STUB");
    });
  }

  set(name: string, value: any): this {
    if (typeof name !== 'string') throw new TypeError('name must be a string!');
    if (value == null) throw new TypeError('value is required!');

    const getter = typeof value === 'function' ? value : () => { throw new Error("STUB"); };

    this.getters[name] = getter;
    this.cache.del(name);

    return this;
  }

  remove(name: string): this {
    if (typeof name !== 'string') throw new TypeError('name must be a string!');

    this.getters[name] = null;
    this.cache.del(name);

    return this;
  }

  invalidate(): this {
      throw new Error("STUB");
  }

  toObject(): Record<string, any> {
      throw new Error("STUB");
  }
}

export = Locals;
