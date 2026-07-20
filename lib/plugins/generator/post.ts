import type { BaseGeneratorReturn, PostSchema, SiteLocals } from '../../types';
import type Document from 'warehouse/dist/document';

type SimplePostGenerator = Omit<BaseGeneratorReturn, 'layout'> & { data: string };
interface NormalPostGenerator extends BaseGeneratorReturn {
  data: PostSchema | Document<PostSchema>;
  layout: string[];
}
type PostGenerator = SimplePostGenerator | NormalPostGenerator;

function postGenerator(locals: SiteLocals): PostGenerator[] {
    throw new Error("STUB");
}

export = postGenerator;
