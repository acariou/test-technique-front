import * as types from '../constants/ActionTypes';
import { API_KEY, BASE_URL } from '../constants/Config';

export function pending() {
    return {
        type: types.PENDING,
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

export function fetchMovies() {
    const url = `${BASE_URL}discover/movie?primary_release_year=2019&api_key=${API_KEY}`;
    return (dispatch) => {
        dispatch(pending());

        return fetch(url)
            .then(response => response.json())
            .then(json => { 
                dispatch(receiveMovies(json))
            })
            .catch(err => { throw err; });
    };
}

export function receiveMovie(movie) {
    return {
        type: types.RECEIVE_MOVIE,
        isPending: false,
        detail: movie
    };
}

export function getMovie(id) {
    const url = `${BASE_URL}movie/${id}?api_key=${API_KEY}`;
    return (dispatch) => {
        dispatch(pending());

        return fetch(url)
            .then(response => response.json())
            .then(json => { 
                dispatch(receiveMovie(json))
            })
            .catch(err => { throw err; });
    };
}