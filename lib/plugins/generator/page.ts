import type { BaseGeneratorReturn, PageSchema, SiteLocals } from '../../types';
import type Document from 'warehouse/dist/document';

type SimplePageGenerator = Omit<BaseGeneratorReturn, 'layout'> & { data: string };
interface NormalPageGenerator extends BaseGeneratorReturn {
  layout: string[];
  data: PageSchema;
}
type PageGenerator = SimplePageGenerator | NormalPageGenerator;

function pageGenerator(locals: SiteLocals): PageGenerator[] {
    throw new Error("STUB");
}

export = pageGenerator;
