import { stripIndent } from 'hexo-util';
import { cyan, magenta, red, bold } from 'picocolors';
import { Environment } from 'nunjucks';
import Promise from 'bluebird';
import type { NodeJSLikeCallback } from '../types';

const rSwigRawFullBlock = /{% *raw *%}/;
const rCodeTag = /<code[^<>]*>[\s\S]+?<\/code>/g;
const escapeSwigTag = (str: string) => str.replace(/{/g, '&#123;').replace(/}/g, '&#125;');

interface TagFunction {
  (args: any[], content: string, callback?: NodeJSLikeCallback<any>): string | PromiseLike<string>;
}
interface AsyncTagFunction {
  (args: any[], content: string): Promise<string>;
}

class NunjucksTag {
  public tags: string[];
  public fn: TagFunction | AsyncTagFunction;

  constructor(name: string, fn: TagFunction | AsyncTagFunction) {
    this.tags = [name];
    this.fn = fn;
  }

  parse(parser, nodes, lexer) {
      throw new Error("STUB");
  }

  _parseArgs(parser, nodes, lexer) {
      throw new Error("STUB");
  }

  run(context, args, _body, _callback) {
      throw new Error("STUB");
  }

  _run(context, args, body): any {
      throw new Error("STUB");
  }
}

const trimBody = (body: () => any) => {
    throw new Error("STUB");
};

class NunjucksBlock extends NunjucksTag {
  parse(parser, nodes, lexer) {
      throw new Error("STUB");
  }

  _parseBody(parser, _nodes, _lexer) {
      throw new Error("STUB");
  }

  run(context, args, body, _callback) {
      throw new Error("STUB");
  }
}

class NunjucksAsyncTag extends NunjucksTag {
  parse(parser, nodes, lexer) {
      throw new Error("STUB");
  }

  run(context, args, callback) {
      throw new Error("STUB");
  }
}

class NunjucksAsyncBlock extends NunjucksBlock {
  parse(parser, nodes, lexer) {
      throw new Error("STUB");
  }

  run(context, args, body, callback) {
      throw new Error("STUB");
  }
}

const getContextLineNums = (min: number, max: number, center: number, amplitude: number) => {
  const result = [];
  let lbound = Math.max(min, center - amplitude);
  const hbound = Math.min(max, center + amplitude);
  while (lbound <= hbound) result.push(lbound++);
  return result;
};

const LINES_OF_CONTEXT = 5;

const getContext = (lines: string[], errLine: number, location: string, type: string) => {
  const message = [
    location + ' ' + red(type),
    cyan('    =====               Context Dump               ====='),
    cyan('    === (line number probably different from source) ===')
  ];

  message.push(
    // get LINES_OF_CONTEXT lines surrounding `errLine`
    ...getContextLineNums(1, lines.length, errLine, LINES_OF_CONTEXT)
      .map(lnNum => {
          throw new Error("STUB");
      })
  );
  message.push(cyan(
    '    =====             Context Dump Ends            ====='));

  return message;
};

class NunjucksError extends Error {
  line?: number;
  location?: string;
  type?: string;
}

/**
 * Provide context for Nunjucks error
 * @param  {Error}    err Nunjucks error
 * @param  {string}   str string input for Nunjucks
 * @return {Error}    New error object with embedded context
 */
const formatNunjucksError = (err: Error, input: string, source = ''): Error => {
  err.message = err.message.replace('(unknown path)', source ? magenta(source) : '');

  const match = err.message.match(/Line (\d+), Column \d+/);
  if (!match) return err;
  const errLine = parseInt(match[1], 10);
  if (isNaN(errLine)) return err;

  // trim useless info from Nunjucks Error
  const splitted = err.message.split('\n');

  const e = new NunjucksError();
  e.name = 'Nunjucks Error';
  e.line = errLine;
  e.location = splitted[0];
  e.type = splitted[1].trim();
  e.message = getContext(input.split(/\r?\n/), errLine, e.location, e.type).join('\n');
  return e;
};

type RegisterOptions = {
  async?: boolean;
  ends?: boolean;
}

/**
 * A tag allows users to quickly and easily insert snippets into their posts.
 */
class Tag {
  public env: Environment;
  public source: string;

  constructor() {
    this.env = new Environment(null, {
      autoescape: false
    });
  }

  register(name: string, fn: TagFunction): void
  register(name: string, fn: TagFunction, ends: boolean): void
  register(name: string, fn: TagFunction, options: RegisterOptions): void
  register(name: string, fn: TagFunction, options?: RegisterOptions | boolean):void {
    if (!name) throw new TypeError('name is required');
    if (typeof fn !== 'function') throw new TypeError('fn must be a function');

    if (options == null || typeof options === 'boolean') {
      options = { ends: options as boolean };
    }

    let tag: NunjucksTag;

    if (options.async) {
      let asyncFn: AsyncTagFunction;
      if (fn.length > 2) {
        asyncFn = Promise.promisify(fn);
      } else {
        asyncFn = Promise.method(fn);
      }

      if (options.ends) {
        tag = new NunjucksAsyncBlock(name, asyncFn);
      } else {
        tag = new NunjucksAsyncTag(name, asyncFn);
      }
    } else if (options.ends) {
      tag = new NunjucksBlock(name, fn);
    } else {
      tag = new NunjucksTag(name, fn);
    }

    this.env.addExtension(name, tag);
  }

  unregister(name: string): void {
      throw new Error("STUB");
  }

  render(str: string): Promise<any>;
  render(str: string, callback: NodeJSLikeCallback<any>): Promise<any>;
  render(str: string, options: { source?: string, [key: string]: any }, callback?: NodeJSLikeCallback<any>): Promise<any>;
  render(str: string, options: { source?: string, [key: string]: any } | NodeJSLikeCallback<any> = {}, callback?: NodeJSLikeCallback<any>): Promise<any> {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = {};
    }

    // Get path of post from source
    const { source = '' } = options as { source?: string };

    return Promise.fromCallback(cb => {
        throw new Error("STUB");
    }).catch(err => {
        throw new Error("STUB");
    })
      .asCallback(callback);
  }
}

export = Tag;
