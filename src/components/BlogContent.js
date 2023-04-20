import React from "react";

function BlogContent(props) {

  return <div id="blog-content">{props.articleText}
        <p>{props.minutesToRead}</p>
  </div>;
  }


export default BlogContent;
