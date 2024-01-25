import { useEffect, useState } from "react";
import PrimaryHeader from "./PrimaryHeader.component";
import SecondaryHeader from "./SecondaryHeader.component";

const Header = () => {
  const [hideSecondaryHeader, setHideSecondaryHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      const shouldHide = currentScrollPos > 0;
      setHideSecondaryHeader(shouldHide);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {!hideSecondaryHeader && <SecondaryHeader />}
      <PrimaryHeader />
    </div>
  );
};

export default Header;
