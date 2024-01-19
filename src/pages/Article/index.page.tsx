import { useParams } from "react-router-dom";

const HomePage = () => {
  let params = useParams();
  console.log(params);

  return <div>Articles</div>;
};

export default HomePage;
