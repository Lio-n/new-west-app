import { ParsedArticle } from '../../helpers/formatArticleData.helper';
import DotIcon from '../atoms/icons/dot.icon';
import { ParagraphSkeleton } from '../atoms/skeleton/paragraph.skeleton';
import Body from '../atoms/typographies/body.atom';
import Heading from '../atoms/typographies/heading.atom';
import Phrase from '../atoms/typographies/phrase.atom';

export interface ArticleDetailsItem
  extends Partial<Pick<ParsedArticle, 'title' | 'description' | 'formatedDate' | 'formatedDuration' | 'timeSince' | 'category'>> {}

interface ArticleDetailsProps extends React.HTMLAttributes<HTMLDivElement> {
  data: ArticleDetailsItem;
  includesREADMORE?: boolean;
}

const ArticleDetails: React.FC<ArticleDetailsProps> = ({ data, includesREADMORE = false, className = '', ...props }) => (
  <div className={`size-fit p-4 divide-y-2 divide-transparent ${className}`} {...props}>
    <div className="flex justify-between items-center w-fit text-slate-900">
      <Phrase weight="font-semibold">{data.formatedDate}</Phrase>
      <DotIcon className="mx-2 size-1 bg-slate-900" />
      <Phrase>{data.timeSince}</Phrase>
    </div>
    {data.title && (
      <Heading color="body-500" weight="font-bold" className="group-hover:text-blueberry-600 line-clamp-2 !text-3xl sm:!text-2xl">
        {data.title}
      </Heading>
    )}
    {data.description && (
      <Body color="body-400" className="line-clamp-2">
        {data.description}
        {includesREADMORE && (
          <Phrase weight="font-bold" color="body-900" className="text-md md:text-lg whitespace-nowrap ml-4">
            Read More
          </Phrase>
        )}
      </Body>
    )}
    <div className="flex justify-between items-center w-fit">
      <Phrase color="blueberry-600" weight="font-semibold">
        {data.category}
      </Phrase>
      <DotIcon className="mx-2 size-1 bg-body-400" />
      <Phrase color="body-400">Read {data.formatedDuration}</Phrase>
    </div>
  </div>
);

interface ArticleDetailsSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}
const ArticleDetailsSkeleton: React.FC<ArticleDetailsSkeletonProps> = ({ className = '', ...props }) => (
  <div className={`w-full h-fit grid gap-2 animate-pulse items-center ${className}`} {...props}>
    <div className="flex justify-between items-center w-fit">
      <ParagraphSkeleton className="w-20" />
    </div>
    <ParagraphSkeleton className="w-full h-3" />
    <ParagraphSkeleton className="w-3/6 h-3" />
    <div className="flex justify-between items-center w-fit">
      <ParagraphSkeleton className="w-20" />
    </div>
  </div>
);

export { ArticleDetailsSkeleton };
export default ArticleDetails;
