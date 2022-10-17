import { ADD_MOVIE_FAVORITE, CLEAR_DETAIL, GET_MOVIE_DETAIL, GET_MOVIES, REMOVE_MOVIE_FAVORITE } from "../actions";


const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
};


function rootReducer(state=initialState, action){
    switch(action.type){
        case ADD_MOVIE_FAVORITE:
            return{
                ...state,
                moviesFavourites: [...state.moviesFavourites, action.payload],
            }

        case GET_MOVIES:
            return{
                ...state,
                moviesLoaded: action.payload.Search,
            }

        case REMOVE_MOVIE_FAVORITE:
            return{
                ...state,
                moviesFavourites: state.moviesFavourites.filter(
                    (movie)=>movie.id !== action.payload
                )
            }

        case GET_MOVIE_DETAIL:
            return{
                ...state,
                movieDetail: action.payload,
            }

        case CLEAR_DETAIL:
            return{
                ...state,
                movieDetail:{}
            }
        default:
            return{...state}; 
    }
}

export default rootReducer;