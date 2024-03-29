import React from 'react';
import './App.scss';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const {state, actions} = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={state.photoData}
        topics={state.topicData}
        setModalData={actions.setPhotoSelected}
        favoritePhotos={state.favoritePhotos}
        handleFavorite={actions.updateToFavPhotoIds}
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
