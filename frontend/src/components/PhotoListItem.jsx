import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  /* Insert React */
  return (
    <div className="photo-list-item">
      <img
        className="photo-list-item__image"
        src={props.sampleDataForPhotoListItem.imageSource}
        alt="A picture of Montreal"
      />
      <div className="photo-list-item__details">
        <img
          className="photo-list-item__profile"
          src={props.sampleDataForPhotoListItem.profile}
          alt="Profile"
        />
        <div className="photo-list-item__username">
          <span>{props.sampleDataForPhotoListItem.username}</span>
        </div>
        <div className="photo-list-item__location">
          <span>{props.sampleDataForPhotoListItem.location.city}</span>
          <span>{props.sampleDataForPhotoListItem.location.country}</span>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
