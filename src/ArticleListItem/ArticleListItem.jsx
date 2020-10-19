import React from "react";
import HTMLText from "../HTMLText/HTMLText";


const ArticleListItem = (props) => {
    return (
        <article>
          <header>
            <h1>{props.article.title}</h1>
            <time dateTime={props.article.timeStamp}>{props.article.displayDate}</time>
          </header>
          <HTMLText text={props.article.shortText} />
        </article>
      );

 }

 export default ArticleListItem;