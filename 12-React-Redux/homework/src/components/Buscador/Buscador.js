import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { addMovieFavorite, getMovies } from "../../actions";
import './Buscador.css';



export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    // this.handleChange=this.handleChange.bind(this);
    // this.handleSubmit=this.handleSubmit.bind(this);

  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();

    this.props.getMovies(this.state.title)

    this.setState({title:""})
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
         {/* Aqui tienes que escribir tu codigo para mostrar la lista de peliculas */
            
            this.props.movies?.map((movie) => (
            <li key={movie.imdbID}>
              <span>
                <Link to={`/movie/${movie.imdbID}`} > 
                  {movie.Title}
                </Link>   
              </span> 
              {/* para agregar imagen despues */}
              {/* <img src={movie.Poster}></img> */}
              <button onClick={()=> this.props.addMovieFavorite({title: movie.Title, id: movie.imdbID}) }>Fav</button> 
            </li>
            ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    movies: state.moviesLoaded,
  }
}

function mapDispatchToProps(dispatch){
  return{
    getMovies: (title)=> dispatch(getMovies(title)),
    addMovieFavorite: (movie)=> dispatch(addMovieFavorite(movie))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);
