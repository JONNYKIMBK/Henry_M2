export const GET_MOVIES= "GET_MOVIES";
export const GET_MOVIE_DETAIL="GET_MOVIE_DETAIL";
export const ADD_MOVIE_FAVORITE="ADD_MOVIE_FAVORITE";
export const REMOVE_MOVIE_FAVORITE="REMOVE_MOVIE_FAVORITE";
export const CLEAR_DETAIL="CLEAR_DETAIL";

const apiKey="db5e4b74"




export function getMovies(titulo) {
    return function(dispatch) {
      return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${titulo}`)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: GET_MOVIES, payload: json });
        });
    };
  }

export function getMovieDetail(id) {
    return function(dispatch) {
      return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: GET_MOVIE_DETAIL, payload: json });
        });
    };
  }

export const addMovieFavorite=(payload)=>{
    return{
        type: ADD_MOVIE_FAVORITE,
        payload,
    }
}

export function removeMovieFavorite(payload){
    return{
        type: REMOVE_MOVIE_FAVORITE,
        payload,
    }
}

export function clearDetails(){
  return{
    type: CLEAR_DETAIL,
  }
}