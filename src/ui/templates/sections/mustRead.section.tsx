import HeadingSection from "../../molecules/headingSection.molecule";
import ArticleInfo from "../../../data/mock/Article.mock.json";
import ArticleCardMid from "../../molecules/articleCardMid.molecule";
import ArticleCardSmall from "../../molecules/articleCardSmall.molecule";

const MustReadSection = () => {
  const SmallArticlesList = () => (
    <ul className="grid gap-4 content-between">
      {[ArticleInfo, ArticleInfo, ArticleInfo].map((data, index) => (
        <li key={index} className="h-fit">
          <ArticleCardSmall
            className="md:grid-cols-[1fr,1fr]"
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
    <div className="my-8 mx-auto max-w-screen-2xl">
      <HeadingSection title={"Must Read"} href={"#"} className="px-4 mb-8" />
      <div className="grid gap-6 xl:grid-cols-[55%,40%] justify-evenly">
        <ArticleCardMid
          data={{
            ...ArticleInfo.attributes,
            description:
              "Hundreds of thousands of people have been left without access to normal drinking water since the breach of the Kakhovka dam, Ukranine's President Volodymyr Zelensky has said.",
            cover: "https://fastly.picsum.photos/id/586/536/354.jpg?hmac=P7VlXEEnfksFtsPAdPrNzb5pPU0QKTGK8d2z_aFuH80",
            href: "#",
          }}
          includesREADMORE={false}
        />
        <SmallArticlesList />
      </div>
    </div>
  );
};

export default MustReadSection;
