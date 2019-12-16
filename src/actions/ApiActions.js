import * as types from '../constants/ActionTypes';

export function pendingMovies() {
    return {
        type: types.PENDING_MOVIES,
        isPending: true
    };
}

export function receiveMovies(movies) {
    return {
        type: types.RECEIVE_MOVIES,
        isPending: false,
        movies: movies
    };
}

export function fetchMovies(url) {
    return (dispatch) => {
        dispatch(pendingMovies());

        return fetch(url)
            .then(response => response.json())
            .then(json => { 
                dispatch(receiveMovies(json))
            })
            .catch(err => { throw err; });
    };
}