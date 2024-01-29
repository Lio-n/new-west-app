import HeadingSection from "../../molecules/headingSection.molecule";
import ArticleCardMid from "../../molecules/articleCardMid.molecule";
import ArticleCardSmall from "../../molecules/articleCardSmall.molecule";

type Article = {
  title: string;
  description: string;
  category: string;
  cover: string;
  readingTime: number;
  publishedAt: string;
  href: string;
};

interface ParserAticle extends Article {
  formatedDate: string;
  timeSince: string;
  formatedDuration: string;
}

interface MustReadSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  data: ParserAticle[];
  href: string;
}

const MustReadSection: React.FC<MustReadSectionProps> = ({ data, href, ...props }) => {
  const SmallArticlesList = () => (
    <ul className="grid gap-4 content-between">
      {data.slice(1).map((item, index) => (
        <li key={index} className="h-fit">
          <ArticleCardSmall className="md:grid-cols-[1fr,1fr]" data={item} />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="my-8 mx-auto max-w-screen-2xl" {...props}>
      <HeadingSection title={"Must Read"} href={href} className="px-4 mb-8" />
      <div className="grid gap-6 xl:grid-cols-[55%,40%] justify-evenly">
        <ArticleCardMid data={data[0]} includesREADMORE={false} />
        <SmallArticlesList />
      </div>
    </div>
  );
};

export default MustReadSection;
