// combine Reducers
import { combineReducers } from 'redux';
import favoriteReducer from './favoriteReducer';

const rootReducer = combineReducers({favoriteReducer})

export default rootReducer;
