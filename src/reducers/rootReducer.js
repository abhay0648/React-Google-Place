import { combineReducers } from 'redux'
import placeReducer from './placeReducer';
import placeDetailReducer from './placeDetailReducer';

const rootReducer = combineReducers({
		placeReducer,
		placeDetailReducer
})

export default rootReducer
