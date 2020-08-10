import React from 'react';
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component{     // class component로 변경한 이유는 state를 사용하기 위해서.
  state = { // 바꿀 데이터를 넣는다.
    isLoading : true,
    movies : []
  };

  getMovies = async () => {               // async와 await는 자바스크립트의 비동기 처리 새로운 패턴. axoios.get()이 끝날 때까지 기다린다.  
    const {data : {data : {movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sorting_by=rating"); 
    console.log(movies);
    this.setState({movies, isLoading : false }) // this.setState({movies:movies}) 단축해서 사용 
  }

  componentDidMount(){
    this.getMovies();
  }
  render(){ // class component는 render를 가지고 있지 않지만, React component는 render method를 가지고 있기 때문에 사용 가능하다. ->  html code를 보여주게 된다.
    const {isLoading, movies} = this.state;
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
                genres={movie.genres} 
              />
            ))}
        </div>
      }
      </section>
    );
  }
}

export default Home;
