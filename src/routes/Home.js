import React, {useState, useEffect} from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

function GetData(url){
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const CallUrl = async () => {
    try{
      const {data : {data: {movies}}} = await axios.get(url);
      setMovies(movies);
    } catch{
      setError("Error!!!");
    } finally{
      setIsLoading(false);
    }
  };

  useEffect(() => {
    CallUrl();
  },[]);

  return {movies, isLoading, error};
}


function Home(){

  const {movies, isLoading, error} = GetData("https://yts.mx/api/v2/list_movies.json?sorting_by=rating");
  
  return (
    <section className="container">
      {isLoading &&
        <div className="loader"><span className="loader_text">Loading...</span></div>
      }
      {!isLoading && movies && !error &&
        <div className="movies" >
          {movies.map(movie => (
            <Movie 
              key={movie.id}
              id={movie.id}
              summary={movie.summary}
              year={movie.year} 
              title={movie.title} 
              poster={movie.medium_cover_image}
              image={movie.background_image}
              genres={movie.genres}
              rating={movie.rating} 
              runtime={movie.runtime}
            />
          ))}
        </div>
      }
      {!isLoading && error &&
        <div className="loader">Error😂</div>
      }
    </section>
  );
}

export default Home;
