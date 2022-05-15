import React from "react";

const Tags = ({ tags }) => {
  const showTags = () =>
    tags.map((tag, index) => <p key={tag + index}>{tag.name}</p>);

  return (
    <div>
      <h2>Tags</h2>
      {tags.length > 0 ? showTags() : "No tags to show"}
    </div>
  );
};

export default Tags;
