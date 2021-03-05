import React from "react";

function ArticleListItem(prop) {
  return (
    <section>
      <h2>{prop.articlelist.title}</h2>
      <time dateTime={prop.articlelist.timeStamp}>
        {prop.articlelist.displayDate}
      </time>
      <p>{prop.articlelist.shortText}</p>
    </section>
  );
}
export default ArticleListItem;
