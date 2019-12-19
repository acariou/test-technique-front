import { 
    PENDING,
    RECEIVE_MOVIE,
    GET_MOVIE } from '../constants/ActionTypes';

const initialState = {
    isPending: false,
    detail: {}
};

export default function moviesReducer(state = initialState, action) {
    switch(action.type) {
        case PENDING: {
            return Object.assign({}, state, action);
        }
        case RECEIVE_MOVIE: {
            return Object.assign({}, state, action);
        }
        case GET_MOVIE: {
            return Object.assign({}, state, action);
        }
        default:
            return state;
    }
}