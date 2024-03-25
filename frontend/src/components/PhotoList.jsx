import React from "react";

import "../styles/PhotoList.scss";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const sampleDataForPhotoList = [
  {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-1-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    },
    user: {
      id: "1",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
  {
    id: "2",
    location: {
      city: "Toronto",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-2-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-2-Regular.jpeg`,
    },
    user: {
      id: "2",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
  {
    id: "3",
    location: {
      city: "Ottawa",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-3-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-3-Regular.jpeg`,
    },
    user: {
      id: "3",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
];

const PhotoList = () => {
  return (
    <ul className="photo-list">
      {sampleDataForPhotoList.map((photo) => (
        <li key={photo.id} className="photo-list__item">
          <PhotoFavButton />
          <img
            className="photo-list__image"
            src={photo.urls.regular}
            alt="A picture"
          />
          <div className="photo-list__details">
            <img
              className="photo-list__profile"
              src={photo.user.profile}
              alt="Profile"
            />
            <div className="photo-list__user-info">
              <div className="photo-list__username">
                <span>{photo.user.username}</span>
              </div>
              <div className="photo-list__location">
                <span>{photo.location.city}</span>
                <span>{photo.location.country}</span>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
