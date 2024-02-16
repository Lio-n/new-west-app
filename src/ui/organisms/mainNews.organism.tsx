import { ParsedArticleEntityResponseCollection } from "../../helpers/formatArticleData.helper";
import ArticleCardPrimary from "../molecules/articleCardPrimary.molecule";
import ArticleCardSmall from "../molecules/articleCardSmall.molecule";

interface MainNewsProps extends React.HTMLAttributes<HTMLDivElement> {
  data: ParsedArticleEntityResponseCollection;
}

const MainNews: React.FC<MainNewsProps> = ({ data, className = "", ...props }) => {
  const SmallArticlesList = () => (
    <ul className="grid gap-4 content-between">
      {data.data.slice(1).map((item, index) => (
        <li key={index} className="h-fit">
          <ArticleCardSmall data={item.attributes} />
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <div className={`mt-8 grid gap-6 xl:grid-cols-[55%,40%] justify-evenly ${className}`} {...props}>
        <ArticleCardPrimary data={data.data[0].attributes} />

        <SmallArticlesList />
      </div>
    </>
  );
};

export default MainNews;
