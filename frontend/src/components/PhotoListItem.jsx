import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  /* Insert React */
  return (
    <div className="photo-list_item">
      <img
        className="photo-list__image"
        src={props.imageSource}
        alt="A picture of Montreal"
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