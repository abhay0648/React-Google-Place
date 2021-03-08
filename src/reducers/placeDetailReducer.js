const initialState = {
    place: [],
}

const GET_PLACE_DETAILS = 'GET_PLACE_DETAILS';

function placeDetailReducer(state = initialState, action){
  switch (action.type) {
    case GET_PLACE_DETAILS:
        return {...state, place: action.payload}

    default:
      return state
  }
}
export default placeDetailReducer
