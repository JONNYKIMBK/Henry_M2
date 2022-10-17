import { ADDMOVIEFAVORITE, CLEARDETAIL, GETMOVIEDETAIL, GETMOVIES, REMOVEMOVIEFAVORITE } from "../actions";


const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
};


function rootReducer(state=initialState, action){
    switch(action.type){
        case ADDMOVIEFAVORITE:
            return{
                ...state,
                moviesFavourites: [...state.moviesFavourites, action.payload],
            }

        case GETMOVIES:
            return{
                ...state,
                moviesLoaded: action.payload.Search,
            }

        case REMOVEMOVIEFAVORITE:
            return{
                ...state,
                moviesFavourites: state.moviesFavourites.filter(
                    (movie)=>movie.id !== action.payload
                )
            }

        case GETMOVIEDETAIL:
            return{
                ...state,
                movieDetail: action.payload,
            }

        case CLEARDETAIL:
            return{
                ...state,
                movieDetail:{}
            }
        default:
            return{...state}; 
    }
}

export default rootReducer;