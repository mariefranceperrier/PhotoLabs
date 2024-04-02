import React from 'react';

import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import TopicList from './TopicList';
import useApplicationData from 'hooks/useApplicationData';


const TopNavigation = (props) => {
  const { topics, favoritePhotos, actions, fetchLikedPhotos } = props;
  const { state } = useApplicationData();

   
  const handleTopicClick = (topicId) => {
    actions.fetchPhotosByTopic(topicId);
  };

  
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} handleTopicClick={handleTopicClick} />
      <FavBadge favoritePhotos={favoritePhotos} fetchLikedPhotos={fetchLikedPhotos} />
    </div>
  )
}

export default TopNavigation;