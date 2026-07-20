import { htmlTag } from 'hexo-util';
import moize from 'moize';

interface Options {
  href?: string;
  title?: string;
  class?: string | string[];
  subject?: string;
  cc?: string | string[];
  bcc?: string | string[];
  id?: string;
  body?: string;
}

interface Attrs {
  href: string;
  title: string;
  class?: string;
  subject?: string;
  cc?: string;
  bcc?: string;
  id?: string;
  body?: string;
  [key: string]: any;
}

function mailToHelper(path: string | string[], text?: string, options: Options = {}) {
    throw new Error("STUB");
}

export = moize(mailToHelper, {
  maxSize: 10,
  isDeepEqual: true
});
