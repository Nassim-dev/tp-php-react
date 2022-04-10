import React from "react";
import Article from "../grouped/Article";

const ArticlesList = ({ articles }) => {
  const displayArticles = () => {
    return articles.map((article, i) => {
      return <Article key={i} article={article} />;
    });
  };

  return displayArticles();
};

export default ArticlesList;
