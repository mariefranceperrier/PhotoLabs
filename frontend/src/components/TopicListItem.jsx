import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = (props) => {
  const handleClick = () => {
    props.handleTopicClick(props.topic.id);
  }

  return (
    <div className="topic-list__item" onClick={handleClick}>
      <span>{props.label}</span>
    </div>
  );
};

export default TopicListItem;