import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ favoritePhotos, fetchLikedPhotos }) => {
  
  const hasFavoritesPhotos = favoritePhotos.length > 0;
  
  return (
    <div className='fav-badge' onClick={fetchLikedPhotos}>
      <FavIcon displayAlert={hasFavoritesPhotos} selected={hasFavoritesPhotos} />
    </div>
  ) 
};

export default FavBadge;