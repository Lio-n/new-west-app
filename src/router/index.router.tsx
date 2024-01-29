import { Routes, Route } from "react-router-dom";

//* Pages
import HomePage from "../pages/Home.page";
import Layout from "../components/Layout.component";
import Page404 from "../pages/404.page";
import SearchArticlePage from "../pages/Article/Search.page";
import ArticleById from "../pages/Article/ById.page";
import AboutUsPage from "../pages/AboutUs.page";
import ArticleByCategory from "../pages/Article/Category/:slug.page";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="article/">
            <Route path="category/:slug" element={<ArticleByCategory />} />
            <Route path="search" element={<SearchArticlePage />} />
            <Route path=":id" element={<ArticleById />} />
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default AppRoutes;
