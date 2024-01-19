import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Page404 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/", { replace: true });
  }, []);

  return (
    <div className="center_items" style={{ height: "100%" }}>
      <h1>Not Found</h1>
    </div>
  );
};

export default Page404;
