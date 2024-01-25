import HeadingSection from "../../molecules/headingSection.molecule";
import ArticleInfo from "../../../data/mock/Article.mock.json";
import ArticleCardMid from "../../molecules/articleCardMid.molecule";

const LatestSection = () => {
  const MidArticlesList = () => (
    <ul className="flex gap-4 flex-wrap justify-center">
      {[ArticleInfo, ArticleInfo, ArticleInfo, ArticleInfo].map((data, index) => (
        <li key={index} className="h-fit sm:max-w-45 2xl:max-w-24">
          <ArticleCardMid
            data={{
              ...data.attributes,
              description:
                "Hundreds of thousands of people have been left without access to normal drinking water since the breach of the Kakhovka dam, Ukranine's President Volodymyr Zelensky has said.",
              cover: "https://fastly.picsum.photos/id/586/536/354.jpg?hmac=P7VlXEEnfksFtsPAdPrNzb5pPU0QKTGK8d2z_aFuH80",
              article_url: "#",
            }}
          />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="my-0 mx-auto max-w-screen-2xl">
      <HeadingSection title={"Latest news"} href={"#"} className="px-4 mb-8" />
      <MidArticlesList />
    </div>
  );
};

export default LatestSection;
