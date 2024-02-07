import React from "react";
import "./Article.css"

function Article(props) {
  return <div className="footer">

    {props.children}</div>;
}

export default Article;