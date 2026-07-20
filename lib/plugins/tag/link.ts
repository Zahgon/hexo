import { htmlTag } from 'hexo-util';

const rUrl = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\w]*))?)/;

/**
* Link tag
*
* Syntax:
*   {% link text url [external] [title] %}
*/

function linkTag(args: string[]) {
    throw new Error("STUB");
}

export = linkTag;
