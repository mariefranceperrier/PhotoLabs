import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = ({photos, handleFavorite, favoritePhotos, setModalData}) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          imageSource={photo.urls.regular}
          profile={photo.user.profile}
          username={photo.user.username}
          location={photo.location}
          isFavorite={favoritePhotos.includes(photo.id)}
          handleFavorite={() => handleFavorite(photo.id)}
          setModalData={setModalData}
          photo={photo}
          />
      ))}
    </ul>
  );
};

export default PhotoList;
