import React from "react";
import ArticleListItem from  "../ArticleListItem/ArticleListItem";

const ArticleList = (props) => {
    let displayContent;
    if (props.articles.length) {
        displayContent = (
          <ul>
            {props.articles.map((article) => (
            <li key={article.title}>
              <ArticleListItem article={article}/>
            </li>
            ))}
          </ul>
        );
      } else {
        displayContent = <div>You have no data!</div>;
      }

      return (
        <section>
          <header>
            <h2>Articles</h2>
          </header>
          {displayContent}
        </section>
      );
}

export default ArticleList;
