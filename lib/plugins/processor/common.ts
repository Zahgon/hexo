import moment from 'moment-timezone';
import micromatch from 'micromatch';

const DURATION_MINUTE = 1000 * 60;

function isMatch(path: string, patterns?: string| string[]) {
  if (!patterns) return false;

  return micromatch.isMatch(path, patterns);
}

function isTmpFile(path: string) {
  return path.endsWith('%') || path.endsWith('~');
}

function isHiddenFile(path: string) {
  return /(^|\/)[_.]/.test(path);
}

function isExcludedFile(path: string, config) {
  if (isTmpFile(path)) return true;
  if (isMatch(path, config.exclude)) return true;
  if (isHiddenFile(path) && !isMatch(path, config.include)) return true;
  return false;
}

export {isTmpFile};
export {isHiddenFile};
export {isExcludedFile};

export function toDate(date?: string | number | Date | moment.Moment): Date | undefined | moment.Moment {
    throw new Error("STUB");
}

export function adjustDateForTimezone(date: Date | moment.Moment, timezone: string) {
    throw new Error("STUB");
}

export {isMatch};
