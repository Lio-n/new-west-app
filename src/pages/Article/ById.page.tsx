import { useParams } from "react-router-dom";

const ArticleById = () => {
  let params = useParams();
  console.log(params);

  return <div>Article by id : {JSON.stringify(params)}</div>;
};

export default ArticleById;
