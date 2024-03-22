import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton() {
  const [isFav, setIsFav] = useState(false);

  const handleClick = () => {
    setIsFav(prevState => !prevState);
    console.log('Fav button clicked');
  }
  
  return (
    <div className={`photo-list__fav-icon ${isFav ? 'active' : 'inactive'}`} onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFav} /> {/* Pass the isFav state as selected prop */}
      </div>
    </div>
  );
}

export default PhotoFavButton;