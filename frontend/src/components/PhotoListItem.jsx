import React, {useState} from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleFavorite = () => {
    setIsFavorite(prevState => !prevState);
  };

  return (
    <div className="photo-list__item">
      <PhotoFavButton
        isFavorite={isFavorite}
        handleFavorite={handleFavorite}/>
      <img
        className="photo-list__image"
        src={props.imageSource}
        alt="A picture"
      />
      <div className="photo-list__details">
        <img
          className="photo-list__profile"
          src={props.profile}
          alt="Profile"
        />
        <div className="photo-list__user-info">
          <div className="photo-list__username">
            <span>{props.username}</span>
          </div>
          <div className="photo-list__location">
            <span>{props.location.city}</span>
            <span>{props.location.country}</span>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default PhotoListItem;