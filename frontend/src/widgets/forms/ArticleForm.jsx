import React, { useState } from "react";

const ArticleForm = () => {
  const [articleData, setArticleData] = useState({});

  const handleChange = (e) => {
    setArticleData({ ...articleData, [e.target.id]: e.target.value });
  };

  const postArticle = async () => {
    const headers = new Headers({
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
    });
    try {
      const response = await fetch(
        "http://localhost:2345/index.php/article/post",
        {
          method: "POST",
          body: JSON.stringify(articleData),
          headers: headers,
          mode: "cors",
          credentials: "include",
        }
      );
      if (response.status >= 200 && response.status <= 299) {
        const data = await response.json();
        console.log(data);
      } else throw new Error(response.statusText);
    } catch (err) {
      console.error(err);
    }
  };

  const submit = () => {
    postArticle();
  };

  return (
    <>
      <section>
        <label>Title</label>
        <input
          placeholder="Enter title"
          id="title"
          type="text"
          onChange={(e) => handleChange(e)}
        ></input>
      </section>
      <section>
        <label>Content</label>
        <textarea
          placeholder="Write your article"
          id="content"
          type="text"
          onChange={(e) => handleChange(e)}
        ></textarea>
      </section>
      <button onClick={() => submit()}>Publish Article</button>
    </>
  );
};

export default ArticleForm;
