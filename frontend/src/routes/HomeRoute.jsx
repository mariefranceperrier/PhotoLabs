import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';


const HomeRoute = (props) => {
  const { photos, topics, setModalData, favoritePhotos, handleFavorite, fetchLikedPhotos, state, actions } = props;
  const { selectedTopic, photosByTopic } = state;
  const selectedTopicPhotos = selectedTopic ? photosByTopic[selectedTopic] : null;

  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        favoritePhotos={favoritePhotos}
        fetchLikedPhotos={fetchLikedPhotos}
        actions={actions}
      />
      <PhotoList
        photos={selectedTopicPhotos || photos}
        handleFavorite={handleFavorite}
        favoritePhotos={favoritePhotos}
        setModalData={setModalData}
      />
    </div>
  );
};

export default HomeRoute;
