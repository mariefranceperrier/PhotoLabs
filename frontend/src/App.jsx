import React, { useState } from 'react';
import './App.scss';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
// import LikedPhotosRoute from 'routes/LikePhotosRoute';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const { state, actions } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={state.photoData}
        topics={state.topicData}
        setModalData={actions.setPhotoSelected}
        favoritePhotos={state.favoritePhotos}
        handleFavorite={actions.updateToFavPhotoIds}
        fetchLikedPhotos={actions.fetchLikedPhotos}
        actions={actions}
        state={state}

      />
      {state.modalData && (
        <PhotoDetailsModal
          modalData={state.modalData}
          setModalData={actions.onClosePhotoDetailsModal}
          favoritePhotos={state.favoritePhotos}
          handleFavorite={actions.updateToFavPhotoIds}
        />
      )}
    </div>
  );
};

export default App;
