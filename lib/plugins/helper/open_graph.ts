import { isMoment, isDate, Moment } from 'moment';
import { encodeURL, prettyUrls, stripHTML, escapeHTML } from 'hexo-util';
import moize from 'moize';
import type { LocalsType } from '../../types';

const localeMap = {
  'en': 'en_US',
  'de': 'de_DE',
  'es': 'es_ES',
  'fr': 'fr_FR',
  'hu': 'hu_HU',
  'id': 'id_ID',
  'it': 'it_IT',
  'ja': 'ja_JP',
  'ko': 'ko_KR',
  'nl': 'nl_NL',
  'ru': 'ru_RU',
  'th': 'th_TH',
  'tr': 'tr_TR',
  'vi': 'vi_VN'
};

const localeToTerritory = moize.shallow(str => {
    throw new Error("STUB");
});

const meta = (name: string, content: string | URL, escape?: boolean) => {
    throw new Error("STUB");
};

const og = (name: string, content?: string, escape?: boolean) => {
    throw new Error("STUB");
};

interface Options {
  image?: string;
  images?: string[];
  description?: string;
  title?: string;
  type?: string;
  url?: string;
  site_name?: string;
  twitter_card?: string;
  date?: Moment | Date | false;
  updated?: Moment | Date | false;
  language?: string;
  author?: string;
  twitter_image?: string;
  twitter_id?: string;
  twitter_site?: string;
  fb_admins?: string;
  fb_app_id?: string;
}

function openGraphHelper(this: LocalsType, options: Options = {}) {
    throw new Error("STUB");
}

export = openGraphHelper;
