import React from "react";

const Article = ({ article }) => {
  return (
    <div>
      <h1>{article?.title}</h1>
      <h3>{article?.author}</h3>
      <h3>{article?.date}</h3>
      <p>{article?.content}</p>
    </div>
  );
};

export default Article;
