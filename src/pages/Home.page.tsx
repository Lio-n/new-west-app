import HomeSection from "../ui/templates/sections/home.section";
import LatestSection from "../ui/templates/sections/latest.section";
import MustReadSection from "../ui/templates/sections/mustRead.section";
import ArticleInfo from "../data/mock/Article.mock.json";
import formatArticleData from "../helpers/formatArticleData.helper";

const HomePage = () => {
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
    <div className="py-24 lg:py-36 md:px-4">
      <HomeSection />
      <LatestSection />
      <MustReadSection data={fetcher()} href={"/article/search?sort=relevance"} />
    </div>
  );
};

export default HomePage;
