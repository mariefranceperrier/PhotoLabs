import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';


const PhotoDetailsModal = (props) => {
  console.log('Modal Data:', props.modalData);

  const {modalData, setModalData, photos} = props;

  const handleCloseModal = () => {
    props.setModalData(null); // Close the modal by setting modalData to null
  };

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleCloseModal}>
        <img src={closeSymbol} alt="close symbol" />  
      </button>
      {modalData && ( // Render content only if modalData is not null
        <>
          <img
            className="photo-details-modal__image"
            src={modalData.imageSource}
            alt="A picture"
          />
          <div className="photo-details-modal__top-bar">
            <img
              className="photo-details-modal__photograper-profile"
              src={modalData.profile}
              alt="Profile"
            />
            <div className="photo-details-modal__photographer-details">
              <div className="photo-details-modal__photographer-info">
                <span>{modalData.username}</span>
              </div>
              <div className="photo-details-modal__photographer-location">
                <span>{modalData.location.city}</span>
                <span>, {modalData.location.country}</span>
              </div>
            </div>
          </div>
          <span className="photo-details-modal__header">Similar Photos</span>
          <div className="photo-details-modal__similar-photos">
            <PhotoList photos={photos} setModalData={setModalData} />
          </div>
        </>
      )}
    </div>
  );
};

export default PhotoDetailsModal;