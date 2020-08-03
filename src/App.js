import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  {
    id:1,
    name : "Kimchi",
    image : "http://www.foodnmed.com/news/photo/201907/18809_4496_540.jpg",
    rating : 4.5
  },
  {
    id:2,
    name : "Samhyeopsal",
    image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile30.uf.tistory.com%2Fimage%2F9942B3395A3501C304B135",
    rating : 5
  },
  {
    id:3,
    name : "Bibimbap",
    image: "http://img.etoday.co.kr/pto_db/2019/07/600/20190726153503_1350707_1200_876.jpg",
    rating : 2
  },
  {
    id:4,
    name : "Dibcasu",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Original_Tonkatsu.jpg/220px-Original_Tonkatsu.jpg",
    rating : 4.8
  },
  {
    id:5,
    name : "Gimbap",
    image: "https://recipe1.ezmember.co.kr/cache/recipe/2016/06/29/e7401296033ab8e4297cd53d71e1bba91.jpg",
    rating : 4.9
  }
]

function Food({name, image, rating}){
  return <div>
    <h2>I Like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src= {image} alt={name}/>
    </div>
}

Food.propTypes = {        // 원하는 정보가 정확히 오는지에 대한 체크를 위한 PropTypes
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};
 
function App() {   
  return (
    <div className="App">
      {foodILike.map(dish => 
       (<Food key={dish.id} name={dish.name} image={dish.image} rating={dish.rating}/>
      )) }
    </div>
  );
} // Component : html을 반환하는 함수

export default App;
