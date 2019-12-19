import { combineReducers } from 'redux';
import movies from '../reducers/movies';
import movie from '../reducers/movie';

const rootReducer = combineReducers({
  movies,
  movie
});

export default rootReducer;