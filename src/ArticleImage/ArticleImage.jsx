import React from "react";
import styles from "./ArticleImage.module.css";

const ArticleImage = (props) => {
  return <img className={styles.image} alt={props.title} src={props.url} />;
};

export default ArticleImage;
