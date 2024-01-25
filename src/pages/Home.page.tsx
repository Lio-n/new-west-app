import { useParams } from "react-router-dom";
import HomeSection from "../ui/templates/sections/home.section";
import LatestSection from "../ui/templates/sections/latest.section";
import MustReadSection from "../ui/templates/sections/mustRead.section";

const HomePage = () => {
  let params = useParams();
  console.log(params);

  return (
    <div className="bg-white py-24 md:px-4 lg:py-36">
      <HomeSection />
      <LatestSection />
      <MustReadSection />
    </div>
  );
};

export default HomePage;
