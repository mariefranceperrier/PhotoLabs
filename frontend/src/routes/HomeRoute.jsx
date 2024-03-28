import React, {useState} from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';


const HomeRoute = (props) => {
  const { photos, topics, setModalData, favoritePhotos, handleFavorite } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favoritePhotos={favoritePhotos} />
      <PhotoList
        photos={photos}
        handleFavorite={handleFavorite}
        favoritePhotos={favoritePhotos}
        setModalData={setModalData}
      />
    </div>
  );
};

export default HomeRoute;
