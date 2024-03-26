import React, {useState} from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';


const HomeRoute = ({ photos, topics, setDisplayModal }) => {
  const [favoritePhotos, setFavoritePhotos] = useState([]);

  const handleFavorite = (photoId) => {
    if (favoritePhotos.includes(photoId)) {
      setFavoritePhotos(prevPhotos => prevPhotos.filter(id => id !== photoId));
    } else {
      setFavoritePhotos(prevPhotos => [...prevPhotos, photoId]);
    }
  };

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favoritePhotos={favoritePhotos} />
      <PhotoList
        photos={photos}
        handleFavorite={handleFavorite}
        favoritePhotos={favoritePhotos}
        setDisplayModal={setDisplayModal}
        setSinglePhotoDetail={setSinglePhotoDetail}
      />
    </div>
  );
};

export default HomeRoute;
