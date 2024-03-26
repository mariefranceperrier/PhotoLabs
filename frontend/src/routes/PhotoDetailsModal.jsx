import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';


const PhotoDetailsModal = (props) => {
  console.log('Single Photo Detail:', props.singlePhotoDetail);

  const handleCloseModal = () => {
    props.setDisplayModal(false); // This is the function that will close the modal
  };

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleCloseModal}>
        <img src={closeSymbol} alt="close symbol" />  
      </button>
      <img
        className="photo-details-modal__image"
        src={props.singlePhotoDetail.imageSource}
        alt="A picture"
      />
      <div className="photo-details-modal__top-bar">
        <img
          className="photo-details-modal__photograper-profile"
          src={props.singlePhotoDetail.profile}
          alt="Profile"
        />
        <div className="photo-details-modal__photographer-details">
          <div className="photo-details-modal__photographer-info">
            <span>{props.singlePhotoDetail.username}</span>
          </div>
          <div className="photo-details-modal__photographer-location">
            <span>{props.singlePhotoDetail.location.city}</span>
            <span>, {props.singlePhotoDetail.location.country}</span>
          </div>
        </div>
      </div>
        <span className="photo-details-modal__header">Similar Photos</span>
          <PhotoList/>
    </div>
  )
};

export default PhotoDetailsModal;

