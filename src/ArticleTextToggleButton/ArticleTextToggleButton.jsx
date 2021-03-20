import React from "react";
import PropTypes from "prop-types";

const ArticleTextToggleButton = ({ updateText, buttonText }) => {
  return (
    <section>
      <p>
        <button onClick={updateText}>{buttonText}</button>
      </p>
    </section>
  );
};

ArticleTextToggleButton.propTypes = {
  article: PropTypes.object.isRequired,
};
export default ArticleTextToggleButton;
