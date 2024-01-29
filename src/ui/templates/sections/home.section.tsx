import ArticleInfo from "../../../data/mock/Article.mock.json";
import NewsTrikerInfo from "../../../data/mock/NewsTriker.mock.json";
import NewsTicker from "../../../components/newsTicker.component";
import MainNews from "../../organisms/mainNews.organism";
import formatArticleData from "../../../helpers/formatArticleData.helper";

const HomeSection = () => {
  const fetcher = () => {
    const { body, claps, views, createdAt, updatedAt, ...args } = ArticleInfo.attributes;

    const fetchedInfo = {
      ...args,
      description:
        "Hundreds of thousands of people have been left without access to normal drinking water since the breach of the Kakhovka dam, Ukranine's President Volodymyr Zelensky has said.",
      cover: "https://fastly.picsum.photos/id/586/536/354.jpg?hmac=P7VlXEEnfksFtsPAdPrNzb5pPU0QKTGK8d2z_aFuH80",
      href: "#",
    };

    return formatArticleData([fetchedInfo, fetchedInfo, fetchedInfo, fetchedInfo, fetchedInfo]);
  };

  return (
    <div className="max-w-screen-2xl md:pb-40 sm:mx-auto my-0">
      <NewsTicker data={NewsTrikerInfo.updates} />
      <MainNews data={fetcher()} />
    </div>
  );
};

export default HomeSection;
