import {useState} from 'react';

const useApplicationData = () => {
  const [modalData, setModalData] = useState(null);
  const [favoritePhotos, setFavoritePhotos] = useState([]);

  const updateToFavPhotoIds = (photoId) => { // Function to handle favoriting a photo, called handleFavorite in components.
    if (favoritePhotos.includes(photoId)) {
      setFavoritePhotos(prevPhotos => prevPhotos.filter(id => id !== photoId));
    } else {
      setFavoritePhotos(prevPhotos => [...prevPhotos, photoId]);
    }
  };

  const setPhotoSelected = (photoData) => { // Function to set the selected photo in the modal, called handleModalDisplay in components.
    setModalData(photoData);
  };

  const onClosePhotoDetailsModal = () => { // Function to close the modal, called handleCloseModal in components.
    setModalData(null);
  };

  return {
    state: {
      modalData,
      favoritePhotos
    },
    actions: {
      updateToFavPhotoIds,
      setPhotoSelected,
      onClosePhotoDetailsModal
    }
  };
};

export default useApplicationData;