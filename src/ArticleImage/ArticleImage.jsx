import React from "react";
import styles from "./ArticleImage.module.css";

const ArticleImage = (props) => {
    return (
      <div className={styles.container}>
       <img src={props.url} alt={props.title} />
      </div>
    );
  };

  export default ArticleImage;