import React from "react";
import PropTypes from "prop-types";
import "./Movie.css"
import { Link } from "react-router-dom";

function Movie({year, id, title, summary, poster, genres, rating, image, runtime}){
    return (
        <div className="movie">
            <Link to={{
                pathname:`/movie/${id}`,
                state: {year, title, summary, poster, genres, rating, image, runtime}    // state 값을 props로 전달
                }}>
                <img src={poster} alt={title} title={title}/>
                <div className="movie_data">
                    <h3 className="movie_title">{title} <span className="movie_year">({year})</span></h3>
                    <h5 className="movie_rating">★ {rating}/10.0 ★</h5>
                    <ul className="movie_genres">{genres.map( (genre, index) => <li key={index} className="genres_genre">{genre}</li>)}</ul>
                </div> 
            </Link>       
        </div>
    );
};

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;