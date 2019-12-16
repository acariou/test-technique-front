import { RECEIVE_MOVIES, FETCH_MOVIES } from '../constants/ActionTypes';

const initialState = {
    isPending: false,
    movies: {}
};

export default function moviesReducer(state = initialState, action) {
    switch(action.type) {
        case RECEIVE_MOVIES: {
            return Object.assign({}, state, action);
        }
        case FETCH_MOVIES: {
            return Object.assign({}, state, action);
        }
        default:
            return state;
    }
}