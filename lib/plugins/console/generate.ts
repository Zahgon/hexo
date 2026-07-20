import { exists, writeFile, unlink, stat, mkdirs } from 'hexo-fs';
import { join } from 'path';
import Promise from 'bluebird';
import prettyHrtime from 'pretty-hrtime';
import { cyan, magenta } from 'picocolors';
import tildify from 'tildify';
import { PassThrough, type Readable } from 'stream';
import { createSha1Hash } from 'hexo-util';
import type Hexo from '../../hexo';
import type Router from '../../hexo/router';

interface GenerateArgs {
  f?: boolean
  force?: boolean
  b?: boolean
  bail?: boolean
  c?: string
  concurrency?: string
  w?: boolean
  watch?: boolean
  d?: boolean
  deploy?: boolean
  [key: string]: any
}

class Generator {
  public context: Hexo;
  public force: boolean;
  public bail: boolean;
  public concurrency: string;
  public watch: boolean;
  public deploy: boolean;
  public generatingFiles: Set<string>;
  public start: [number, number];
  public args: GenerateArgs;

  constructor(ctx: Hexo, args: GenerateArgs) {
    this.context = ctx;
    this.force = args.f || args.force;
    this.bail = args.b || args.bail;
    this.concurrency = args.c || args.concurrency;
    this.watch = args.w || args.watch;
    this.deploy = args.d || args.deploy;
    this.generatingFiles = new Set();
    this.start = process.hrtime();
    this.args = args;
  }
  generateFile(path: string): Promise<void | boolean> {
      throw new Error("STUB");
  }
  writeFile(path: string, force?: boolean): Promise<boolean> {
    const { route, log } = this.context;
    const publicDir = this.context.public_dir;
    const Cache = this.context.model('Cache');
    const dataStream = this.wrapDataStream(route.get(path));
    const buffers = [];
    const hasher = createSha1Hash();

    const finishedPromise = new Promise<void>((resolve, reject) => {
        throw new Error("STUB");
    });

    // Get data => Cache data => Calculate hash
    dataStream.on('data', chunk => {
        throw new Error("STUB");
    });

    return finishedPromise.then(() => {
        throw new Error("STUB");
    });
  }
  deleteFile(path: string): Promise<void> {
      throw new Error("STUB");
  }
  wrapDataStream(dataStream: ReturnType<Router['get']>): Readable {
    const { log } = this.context;
    // Pass original stream with all data and errors
    if (this.bail) {
      return dataStream;
    }

    // Pass all data, but don't populate errors
    dataStream.on('error', err => {
        throw new Error("STUB");
    });

    return dataStream.pipe(new PassThrough());
  }
  firstGenerate(): Promise<void> {
      throw new Error("STUB");
  }
  execWatch(): Promise<void> {
      throw new Error("STUB");
  }
  execDeploy() {
      throw new Error("STUB");
  }
}

function generateConsole(this: Hexo, args: GenerateArgs = {}): Promise<any> {
    throw new Error("STUB");
}

export = generateConsole;
