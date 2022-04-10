import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import ArticlesList from "../widgets/lists/ArticlesList";
import PageLayout from "./PageLayout";

const ArticleListPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "http://localhost:2345/index.php/article/list?limit=20"
        );
        if (response.status >= 200 && response.status <= 299) {
          const data = await response.json();
          setArticles(data);
          console.log(data);
        } else throw new Error(response.statusText);
      } catch (err) {
        setArticles([]);
        console.log(err);
      }
    }
    fetchData();
  }, []);

  if (
    !sessionStorage.getItem("userToken") ||
    sessionStorage.getItem("userToken") === undefined
  ) {
    return <Navigate to="/" />;
  }
  return (
    <PageLayout>
      <ArticlesList articles={articles} />;
    </PageLayout>
  );
};

export default ArticleListPage;
