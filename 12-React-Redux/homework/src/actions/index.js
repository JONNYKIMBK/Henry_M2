export const GETMOVIES= "GETMOVIES";
export const GETMOVIEDETAIL="GETMOVIEDETAIL";
export const ADDMOVIEFAVORITE="ADDMOVIEFAVORITE";
export const REMOVEMOVIEFAVORITE="REMOVEMOVIEFAVORITE";
export const CLEARDETAIL="CLEARDETAIL";

const apiKey="db5e4b74"



export function getMovies(titulo) {
    return function(dispatch) {
      return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${titulo}`)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: GETMOVIES, payload: json });
        });
    };
  }

export function getMovieDetail(id) {
    return function(dispatch) {
      return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: GETMOVIEDETAIL, payload: json });
        });
    };
  }

export const addMovieFavorite=(payload)=>{
    return{
        type: ADDMOVIEFAVORITE,
        payload,
    }
}

export function removeMovieFavorite(payload){
    return{
        type: REMOVEMOVIEFAVORITE,
        payload,
    }
}

export function clearDetails(){
  return{
    type: CLEARDETAIL,
  }
}