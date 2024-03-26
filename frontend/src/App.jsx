import React, {useState} from 'react';
import './App.scss';

import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [singlePhotoDetail, setSinglePhotoDetail] = useState(null);

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        setDisplayModal={setDisplayModal} 
        setSinglePhotoDetail={setSinglePhotoDetail}
      />
      {displayModal && <PhotoDetailsModal setDisplayModal={setDisplayModal} />}
      {singlePhotoDetail && <PhotoDetailsModal singlePhotoDetail={singlePhotoDetail} />}
    </div>
  );
};

export default App;
