import React from "react";

const Tags = ({ tags }) => {
  const showTags = () =>
    tags.map((tag, index) => <p className="card-text display-6" key={tag + index}>{tag.name}</p>);

  return (
    <section className="card-body">
      <h2 className="card-title text-warning display-5">Tags 🏷️</h2>
      {tags.length > 0 ? showTags() : "No tags to show"}
    </section>
  );
};

export default Tags;
