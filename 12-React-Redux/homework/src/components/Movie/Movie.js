import React from 'react';
import { connect } from 'react-redux';
import { clearDetails, getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

    componentDidMount(){
        this.props.getMovieDetail(this.props.id);
    }

    componentWillUnmount(){
        this.props.clear();
    }

    render() {
        return (
            <div className="movie-detail">
                {/* Detalle de la pelicula   */}

                <h1>{this.props.movieDetail.Title}</h1>
                <img src={this.props.movieDetail.Poster} alt="Poster" />
                <p>{this.props.movieDetail.Plot}</p>

            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        movieDetail: state.movieDetail,
    }
}

function mapDispatchToProps(dispatch){
    return{
        getMovieDetail: (id)=>dispatch(getMovieDetail(id)),
        clear: ()=>dispatch(clearDetails())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);