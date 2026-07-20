import type Hexo from '../hexo';

type BinaryRelationType<K extends PropertyKey, V extends PropertyKey> = {
  [key in K]: PropertyKey;
} & {
  [key in V]: PropertyKey;
};

class BinaryRelationIndex<K extends PropertyKey, V extends PropertyKey> {
  keyIndex: Map<PropertyKey, Set<PropertyKey>> = new Map();
  valueIndex: Map<PropertyKey, Set<PropertyKey>> = new Map();
  key: K;
  value: V;
  ctx: Hexo;
  schemaName: string;

  constructor(key: K, value: V, schemaName: string, ctx: Hexo) {
    this.key = key;
    this.value = value;
    this.schemaName = schemaName;
    this.ctx = ctx;
  }

  load() {
      throw new Error("STUB");
  }

  saveHook(data: BinaryRelationType<K, V> & { _id: PropertyKey }) {
      throw new Error("STUB");
  }

  removeHook(data: BinaryRelationType<K, V> & { _id: PropertyKey }) {
      throw new Error("STUB");
  }

  findById(_id: PropertyKey) {
    const raw = this.ctx.model(this.schemaName).findById(_id, { lean: true });
    if (!raw) return;
    return { ...raw };
  }

  find(query: Partial<BinaryRelationType<K, V>>) {
    const key = query[this.key];
    const value = query[this.value];

    if (key && value) {
      const ids = this.keyIndex.get(key);
      if (!ids) return [];
      return Array.from(ids)
        .map(_id => { throw new Error("STUB"); })
        .filter(record => { throw new Error("STUB"); });
    }

    if (key) {
      const ids = this.keyIndex.get(key);
      if (!ids) return [];
      return Array.from(ids).map(_id => { throw new Error("STUB"); });
    }

    if (value) {
      const ids = this.valueIndex.get(value);
      if (!ids) return [];
      return Array.from(ids).map(_id => { throw new Error("STUB"); });
    }

    return [];
  }

  findOne(query: Partial<BinaryRelationType<K, V>>) {
      throw new Error("STUB");
  }
}

export default BinaryRelationIndex;
