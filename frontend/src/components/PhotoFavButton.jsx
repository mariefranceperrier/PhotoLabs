import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton({isFavorite, handleFavorite}) {

  return (
    <div className={`photo-list__fav-icon ${isFavorite ? 'active' : 'inactive'}`} onClick={handleFavorite}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavorite} /> 
      </div>
    </div>
  );
}

export default PhotoFavButton;