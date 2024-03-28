import {useReducer} from 'react';

// Define action types
const SET_MODAL_DATA = 'SET_MODAL_DATA';
const UPDATE_FAV_PHOTO_IDS = 'UPDATE_FAV_PHOTO_IDS';
const CLOSE_MODAL = 'CLOSE_MODAL';

// Define reducer function
const reducer = (state, action) => {
  switch (action.type) {
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


const useApplicationData = () => {
  const initialState = {
    modalData: null,
    favoritePhotos: [],
  };
// useReducer to manag state and dispatch actions
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

  return {
    state,
    actions: {
      setPhotoSelected,
      updateToFavPhotoIds,
      onClosePhotoDetailsModal
    }
  };
};


export default useApplicationData;