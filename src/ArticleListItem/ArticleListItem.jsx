import React, { useState } from "react";
import PropTypes from "prop-types";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton";
import { Link } from "react-router-dom";
import ArticleTextToggleButtonCSS from "../ArticleListItem/ArticleListItem.module.css";
const ArticleListItem = (props) => {
  let [buttonText, setButtonText] = useState("Show more");
  let [toggled, toggle] = useState(false);

  const updateText = () => {
    toggle(!toggled);
    buttonText =
      buttonText === "Show more"
        ? setButtonText("Show less")
        : setButtonText("Show more");
  };

  return (
    <li className={ArticleTextToggleButtonCSS.listElement}>
      <article className={ArticleTextToggleButtonCSS.listContent}>
        <h2>
          <Link to={"/articlelist/" + props.article.slug}>
            {props.article.title}
          </Link>
        </h2>
        {toggled ? (
          <div>
            <time dateTime={props.article.timeStamp}>
              {props.article.displayDate}
            </time>
            <p>{props.article.shortText}</p>
          </div>
        ) : null}
        <ArticleTextToggleButton
          updateText={updateText}
          buttonText={buttonText}
        ></ArticleTextToggleButton>
      </article>
    </li>
  );
};

ArticleListItem.propTypes = {
  article: PropTypes.object.isRequired,
};
export default ArticleListItem;
