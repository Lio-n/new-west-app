import { useParams } from "react-router-dom";
import HomeSection from "../ui/templates/sections/home.section";
import LatestSection from "../ui/templates/sections/latest.section";

const HomePage = () => {
  let params = useParams();
  console.log(params);

  return (
    <div className="bg-white">
      <HomeSection />
      <LatestSection />
    </div>
  );
};

export default HomePage;
