import React from "react";
import PropTypes from "prop-types";
import "./Movie.css"
import { Link } from "react-router-dom";

const noSummary = "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ";

function Movie({year, title, summary, poster, genres}){
    return (
        <div className="movie">
            <Link to={{
                pathname:"/movie-datail",
                state: {year, title, summary, poster, genres}    // state 값을 props로 전달
                }}>
                <img src={poster} alt={title} title={title}/>
                <div className="movie_data">
                    <h3 className="movie_title">{title}</h3>
                    <h5 className="movie_year">{year}</h5>
                    <ul className="movie_genres">{genres.map( (genre, index) => <li key={index} className="genres_genre">{genre}</li>)}</ul>
                    <p className="movie_summary">{!summary ? noSummary:summary.slice(0,200)+"..."}</p>
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
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;