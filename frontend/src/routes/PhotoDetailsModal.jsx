import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';


const PhotoDetailsModal = (props) => {
  const { modalData, setModalData, favoritePhotos, handleFavorite } = props;
  
  const handleCloseModal = () => {
    setModalData(null); 
  };

  return (
    <div className="photo-details-modal">
        <button className="photo-details-modal__close-button" onClick={handleCloseModal}>
          <img src={closeSymbol} alt="close symbol" />  
        </button>
      <div className="photo-details-modal__top-bar">
        <PhotoFavButton
          isFavorite={favoritePhotos.includes(modalData.id)}
          handleFavorite={() => handleFavorite(modalData.id)} />
          <img
            className="photo-details-modal__image"
            src={modalData.urls.full}
            alt="Selected photo"
            />
            <div className="photo-details-modal__photographer-details">
            <img
              className="photo-details-modal__photographer-profile"
              src={modalData.user.profile}
              alt="Profile"
            />
              <div >
                <h2 className="photo-details-modal__photographer-info">{modalData.user.name}</h2>
                <span className="photo-details-modal__photographer-location">{modalData.location.city}, {modalData.location.country}</span>
              </div>
            </div>
        </div>
          <h2 className="photo-details-modal__header">Similar Photos</h2>
            <div className="photo-details-modal__images">
              <PhotoList
                photos={Object.values(modalData.similar_photos)}
                setModalData={setModalData}
                handleFavorite={handleFavorite}
                favoritePhotos={favoritePhotos}
              />
            </div>
    </div>
  );
};

export default PhotoDetailsModal;