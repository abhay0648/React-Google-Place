const initialState = {
    place: [],
    loading: false,
    isEmpty:false,
    message: null,
}

const GET_PLACE = 'GET_PLACE';
const GET_PLACE_FULFILLED = 'GET_PLACE_FULFILLED';
const GET_PLACE_REJECTED = 'GET_PLACE_REJECTED';
const GET_PLACE_EMPTY = 'GET_PLACE_EMPTY';

function placeReducer(state = initialState, action){
  switch (action.type) {
    case GET_PLACE:
        return {...state, loading: action.loading,isEmpty: action.isEmpty}
    case GET_PLACE_FULFILLED:
        return {...state, place: action.payload, loading: action.loading,isEmpty: action.isEmpty}
    case GET_PLACE_REJECTED:
        return {...state, message: action.payload, loading: action.loading,isEmpty: action.isEmpty}
    case GET_PLACE_EMPTY:
        return {...state, isEmpty: action.isEmpty, loading: action.loading,
         message : action.message}

    default:
      return state
  }
}
export default placeReducer
