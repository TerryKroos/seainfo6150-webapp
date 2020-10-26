import React, { useState }  from "react";
import PropTypes from "prop-types";
import ArticleTextToggleButton from  '../ArticleTextToggleButton/ArticleTextToggleButton.jsx';
import styles from './ArticleListItem.module.css';

const ArticleListItem = (props) => {
 
  const [clicked, setClicked] = useState(false);

  const doClick = () => {
   setClicked(!clicked);
  }

  
  return (
    <li className={styles.container}>
    <article className={styles.article}>
       <h2 className={styles.title}>{props.article.title}</h2>
       <div className={clicked? null:styles.content}>
          <time className={styles.time}dateTime={props.article.timeStamp}>
          {props.article.displayDate}
          </time>
          <p>{props.article.shortText}</p>
       </div>
    </article>
    <ArticleTextToggleButton onClick={doClick} buttonText={clicked? "Show Less":"Show More"} />
 </li> 
  ); 
};

ArticleListItem.propTypes = {
  article: PropTypes.object.isRequired,
};
export default ArticleListItem;
