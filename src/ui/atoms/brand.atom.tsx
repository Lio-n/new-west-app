const Brand = ({ theme }: { theme?: "dark" | "light" }) => {
  return <div className={`text-4xl sm:text-3xl ${theme === "light" ? "text-body-900" : "text-white"}`}>NewWest</div>;
};

export default Brand;
