import { exists, createReadStream } from 'hexo-fs';
import Promise from 'bluebird';
import { extname } from 'path';
import { magenta } from 'picocolors';
import type Hexo from '../../hexo';
import type { AssetSchema, BaseGeneratorReturn } from '../../types';
import type Document from 'warehouse/dist/document';

interface AssetData {
  modified: boolean;
  data?: () => any;
}

interface AssetGenerator extends BaseGeneratorReturn {
  data: {
    modified: boolean;
    data?: () => any;
  }
}

const process = (name: string, ctx: Hexo) => {
    throw new Error("STUB");
};

function assetGenerator(this: Hexo): Promise<AssetGenerator[]> {
    throw new Error("STUB");
}

export = assetGenerator;
