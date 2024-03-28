import React, {useState} from 'react';
import './App.scss';

import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const [modalData, setModalData] = useState(null);
  const [favoritePhotos, setFavoritePhotos] = useState([]);

  const handleFavorite = (photoId) => {
    if (favoritePhotos.includes(photoId)) {
      setFavoritePhotos(prevPhotos => prevPhotos.filter(id => id !== photoId));
    } else {
      setFavoritePhotos(prevPhotos => [...prevPhotos, photoId]);
    }
  };

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        setModalData={setModalData}
        favoritePhotos={favoritePhotos}
        handleFavorite={handleFavorite}
      />
      {modalData && (
        <PhotoDetailsModal
          modalData={modalData}
          setModalData={setModalData}
          favoritePhotos={favoritePhotos}
          handleFavorite={handleFavorite}
        />
      )}
    </div>
  );
};

export default App;
