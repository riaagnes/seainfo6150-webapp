import React from "react";
import styles from "./ArticleList.module.css";
import ArticleListItem from "../ArticleListItem/ArticleListItem.jsx";

const ArticleList = (props) => {
  let displayContent;
  if (props.articles.length) {
    displayContent = (
      <ul className={styles.container}>
        {props.articles.map((article) => (
          <ArticleListItem article={article} key={article.slug} />
        ))}
      </ul>
    );
  } else {
    displayContent = <div>You have no data!</div>;
  }

  return (
    <div>
      {displayContent}
    </div>
  );
};


export default ArticleList;