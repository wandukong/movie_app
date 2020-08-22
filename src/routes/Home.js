import React, {useState, useEffect} from 'react';
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";





function Home(){

  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [tempMovies, setTempMovies] = useState([]);


  
  const getMovies = async () => {               // async와 await는 자바스크립트의 비동기 처리 새로운 패턴. axoios.get()이 끝날 때까지 기다린다.  
    setTempMovies(await axios.get("https://yts.mx/api/v2/list_movies.json?sorting_by=rating")); 
    setMovies(tempMovies.data.data.movies)
    setIsLoading(false);
    console.log(movies)
  }
  
  useEffect(()=> {
    getMovies();
  },[]);  

  

  return (
    <section className="container">{isLoading? 
      <div className="loader">
        <span className="loader_text">Loading...</span>
      </div> 
      : 
      <div className="movies">
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
    </section>
  );
  
}


export default Home;
