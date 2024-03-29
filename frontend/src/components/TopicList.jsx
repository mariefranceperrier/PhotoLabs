import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";


const TopicList = (props) => {
  const { topics, handleTopicClick } = props;

  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem
          key={topic.id}
          topic={topic}
          label={topic.title}
          handleTopicClick={handleTopicClick}
        />
      ))}
    </div>
  );
};

export default TopicList;
