import React from "react";
import { Routes, Route } from "react-router-dom";
import ArticleCreationPage from "../../pages/ArticleCreationPage";
import ArticleListPage from "../../pages/ArticleListPage";
import ConnectionPage from "../../pages/ConnectionPage";
import SignUpPage from "../../pages/SignUpPage";

const PageNavigation = () => {
  const getHomePageElement = () => {
    if (
      sessionStorage.getItem("userToken") &&
      sessionStorage.getItem("userToken") !== undefined
    ) {
      return <ArticleCreationPage />;
    }
    return <ConnectionPage />;
  };

  return (
    <Routes>
      <Route path="/" element={getHomePageElement()} />
      <Route path="/article_list" element={<ArticleListPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
};

export default PageNavigation;
