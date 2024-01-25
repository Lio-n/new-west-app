import ArticleCardPrimary from "../../molecules/articleCardPrimary.molecule";
import ArticleInfo from "../../../data/mock/Article.mock.json";
import ArticleCardSmall from "../../molecules/articleCardSmall.molecule";

const HomeSection = () => {
  const SmallArticlesList = () => (
    <ul className="grid gap-4 content-between">
      {[ArticleInfo, ArticleInfo, ArticleInfo, ArticleInfo].map((data, index) => (
        <li key={index} className="h-fit">
          <ArticleCardSmall
            data={{
              ...data.attributes,
              cover: "https://fastly.picsum.photos/id/586/536/354.jpg?hmac=P7VlXEEnfksFtsPAdPrNzb5pPU0QKTGK8d2z_aFuH80",
              href: "#",
            }}
          />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="max-w-screen-2xl md:pb-40 sm:mx-auto my-0">
      <div className="grid gap-6 xl:grid-cols-[55%,40%] justify-evenly">
        {/* <NewsTicker data={NewsTrikerInfo.updates}/> */}
        <ArticleCardPrimary
          data={{
            ...ArticleInfo.attributes,
            description:
              "Hundreds of thousands of people have been left without access to normal drinking water since the breach of the Kakhovka dam, Ukranine's President Volodymyr Zelensky has said.",
            cover: "https://fastly.picsum.photos/id/586/536/354.jpg?hmac=P7VlXEEnfksFtsPAdPrNzb5pPU0QKTGK8d2z_aFuH80",
            href: "#",
          }}
        />

        <SmallArticlesList />
      </div>
    </div>
  );
};

export default HomeSection;
