import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ favoritePhotos }) => {
  const hasFavoritesPhotos = favoritePhotos.length > 0;
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={hasFavoritesPhotos} selected={hasFavoritesPhotos} />
    </div>
  ) 
};

export default FavBadge;