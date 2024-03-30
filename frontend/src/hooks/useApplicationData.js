import {useReducer, useEffect} from 'react';

// Define action types
const SET_MODAL_DATA = 'SET_MODAL_DATA';
const UPDATE_FAV_PHOTO_IDS = 'UPDATE_FAV_PHOTO_IDS';
const CLOSE_MODAL = 'CLOSE_MODAL';
const SET_PHOTO_DATA = 'SET_PHOTO_DATA'; 
const SET_TOPIC_DATA = 'SET_TOPIC_DATA'; 
const SET_SELECTED_TOPIC = 'SET_SELECTED_TOPIC';
const SET_PHOTOS_BY_TOPIC = 'SET_PHOTOS_BY_TOPIC';

// Define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };
    case SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };
    case SET_SELECTED_TOPIC: 
        return { ...state, selectedTopic: action.payload };
    case SET_PHOTOS_BY_TOPIC:
      return { ...state, photosByTopic: { ...state.photosByTopic, [action.payload.topicId]: action.payload.photos } };
    case SET_MODAL_DATA:
      return { ...state, modalData: action.payload };
    case UPDATE_FAV_PHOTO_IDS:
      const { photoId } = action.payload;
      const favoritePhotos = state.favoritePhotos.includes(photoId)
        ? state.favoritePhotos.filter(id => id !== photoId)
        : [...state.favoritePhotos, photoId];
      return { ...state, favoritePhotos };
    case CLOSE_MODAL:
      return { ...state, modalData: null };
    default:
      return state;
  }
};

const initialState = {
  modalData: null,
  favoritePhotos: [],
  photoData: [],
  topicData: [],
  selectedTopic: null,
  photosByTopic: {},
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Action creators
  const setPhotoSelected = (photoData) => {
    dispatch({ type: SET_MODAL_DATA, payload: photoData });
  }

  const updateToFavPhotoIds = (photoId) => {
    dispatch({ type: UPDATE_FAV_PHOTO_IDS, payload: { photoId } });
  }

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: CLOSE_MODAL });
  }

  useEffect(() => {
    fetch('/api/photos')
      .then(response => response.json())
      .then((data) => dispatch({ type: SET_PHOTO_DATA, payload: data }));
  }, []);
  
  useEffect(() => {
    fetch('/api/topics')
      .then(response => response.json())
      .then((data) => dispatch({ type: SET_TOPIC_DATA, payload: data }));
  }, []);
  
  const fetchPhotosByTopic = (topicId) => {
    fetch(`/api/topics/photos/${topicId}`)
      .then(response => response.json())
      .then((data) => {
        dispatch({ type: SET_SELECTED_TOPIC, payload: topicId }); 
        dispatch({ type: SET_PHOTOS_BY_TOPIC, payload: { topicId, photos: data } });
      })
  };
  
  return {
    state,
    actions: {
      setPhotoSelected,
      updateToFavPhotoIds,
      onClosePhotoDetailsModal,
      fetchPhotosByTopic
    }
  };
};


export default useApplicationData;