import { Navigate, useParams } from "react-router-dom";
import Title from "../../../ui/atoms/typographies/title.atom";
import { Categories } from "../../../constants/categories.constant";
import MainNews from "../../../ui/organisms/mainNews.organism";
import ArticleInfo from "../../../data/mock/Article.mock.json";
import formatArticleData from "../../../helpers/formatArticleData.helper";
import MustReadSection from "../../../ui/templates/sections/mustRead.section";

const ArticleByCategory = () => {
  // Based in the params.category value, the fetching and content should change.
  const params = useParams();

  if (!Categories.includes((params.slug?.charAt(0).toUpperCase() as string) + params.slug?.slice(1))) {
    return <Navigate to="/" replace />;
  }

  const fetcher = () => {
    const { body, claps, views, createdAt, updatedAt, category, ...args } = ArticleInfo.attributes;

    const fetchedInfo = {
      ...args,
      category: params.slug as string,
      description:
        "Hundreds of thousands of people have been left without access to normal drinking water since the breach of the Kakhovka dam, Ukranine's President Volodymyr Zelensky has said.",
      cover: "https://fastly.picsum.photos/id/586/536/354.jpg?hmac=P7VlXEEnfksFtsPAdPrNzb5pPU0QKTGK8d2z_aFuH80",
      href: "#",
    };

    return formatArticleData([fetchedInfo, fetchedInfo, fetchedInfo, fetchedInfo, fetchedInfo]);
  };

  return (
    <div className="max-w-screen-2xl md:pb-40 sm:mx-auto my-0">
      <Title className="capitalize border-b-2 w-full border-current pb-4" weight="font-semibold">
        {params.slug} News
      </Title>
      <div>
        <MainNews data={fetcher()} className="mb-16" />
        <MustReadSection data={fetcher()} href={`/article/search?category=${params.slug}&sort=relevance`} />
      </div>
    </div>
  );
};

export default ArticleByCategory;
