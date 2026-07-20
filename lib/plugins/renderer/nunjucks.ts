import nunjucks, { Environment } from 'nunjucks';
import { readFileSync } from 'hexo-fs';
import { dirname } from 'path';
import type { StoreFunctionData } from '../../extend/renderer';

function toArray(value) {
    throw new Error("STUB");
}

function safeJsonStringify(json: any, spacer = undefined): string {
    throw new Error("STUB");
}

const nunjucksCfg = {
  autoescape: false,
  throwOnUndefined: false,
  trimBlocks: false,
  lstripBlocks: false
};

const nunjucksAddFilter = (env: Environment): void => {
  env.addFilter('toarray', toArray);
  env.addFilter('safedump', safeJsonStringify);
};

function njkCompile(data: StoreFunctionData): nunjucks.Template {
  let env: Environment;
  if (data.path) {
    env = nunjucks.configure(dirname(data.path), nunjucksCfg);
  } else {
    env = nunjucks.configure(nunjucksCfg);
  }
  nunjucksAddFilter(env);

  const text = 'text' in data ? data.text : readFileSync(data.path);

  return nunjucks.compile(text, env, data.path);
}

function njkRenderer(data: StoreFunctionData, locals?: any): string {
    throw new Error("STUB");
}

njkRenderer.compile = (data: StoreFunctionData): (locals: any) => string => {
    throw new Error("STUB");
};

export = njkRenderer;
