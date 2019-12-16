import { combineReducers } from 'redux';
import movies from '../reducers/movies';
// import entities from '../reducers/entities';
// import environment from '../reducers/environment';
// import modal from '../reducers/modal';
// import navigator from '../reducers/navigator';
// import player from '../reducers/player';
// import playlists from '../reducers/playlists';

const rootReducer = combineReducers({
  movies,
//   entities,
//   environment,
//   modal,
//   navigator,
//   player,
//   playlists,
});

export default rootReducer;