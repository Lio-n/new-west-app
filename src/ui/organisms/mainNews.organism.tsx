import ArticleCardPrimary from "../molecules/articleCardPrimary.molecule";
import ArticleCardSmall from "../molecules/articleCardSmall.molecule";

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

interface MainNewsProps extends React.HTMLAttributes<HTMLDivElement> {
  data: ParserAticle[];
}

const MainNews: React.FC<MainNewsProps> = ({ data, className = "", ...props }) => {
  const SmallArticlesList = () => (
    <ul className="grid gap-4 content-between">
      {data.slice(1).map((item, index) => (
        <li key={index} className="h-fit">
          <ArticleCardSmall data={item} />
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <div className={`mt-8 grid gap-6 xl:grid-cols-[55%,40%] justify-evenly ${className}`} {...props}>
        <ArticleCardPrimary data={data[0]} />

        <SmallArticlesList />
      </div>
    </>
  );
};

export default MainNews;
