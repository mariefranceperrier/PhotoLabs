import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';


const PhotoDetailsModal = ({ modalData, setModalData, photos }) => {
  
  const handleCloseModal = () => {
    setModalData(null); // Close the modal by setting modalData to null
  };

  const selectedCity = modalData && modalData.location.city;
  const similarPhotos = photos.filter(photo => photo.location.city === selectedCity);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleCloseModal}>
        <img src={closeSymbol} alt="close symbol" />  
      </button>
      {modalData && ( // Render content only if modalData is not null

        <div className="photo-details-modal__top-bar">
          <img
            className="photo-details-modal__image"
            src={modalData.imageSource}
            alt="Selected photo"
          />
            <div className="photo-details-modal__photographer-info">
            <img
              className="photo-details-modal__photograper-profile"
              src={modalData.profile}
              alt="Profile"
            />
            <div className="photo-details-modal__photographer-details">
              <div>
                <span>{modalData.username}</span>
              </div>
              <div className="photo-details-modal__photographer-location">
                <span>{modalData.location.city}, {modalData.location.country}</span>
              </div>
            </div>
          <span className="photo-details-modal__header">Similar Photos</span>
            <div className="photo-details-modal__images">
              <PhotoList photos={similarPhotos} setModalData={setModalData} />
            </div>
          </div>
        </div> 
      )}
    </div>
  );
};

export default PhotoDetailsModal;