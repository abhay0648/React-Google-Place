import detailAction from '../action/detailAction.js';

export const selectedPlace = (place) => {
    return  dispatch => {
      dispatch(detailAction.fetchDetailData(place));
    }
}
