import React from "react"
import "./Detail.css"

class Detail extends React.Component{
    componentDidMount(){
        const {location, history} = this.props;
        if(location.state === undefined){
            history.push("/");
        }
    }
    render(){
        const {state} = this.props.location;
        if(state){
            return (
                <div className="detail">
                    <h1 className="detail_title">{state.title} <span className="detail_year">({state.year})</span></h1>     
                    <div className="information">
                        <img src={state.poster}  alt={state.title} title={state.title} style={{width:"250px"}}/>
                        <div>
                            <p className="label_genres">Genre :ㅤ</p>
                            <ul className="detail_genres">{state.genres.map( (genre, index) => <li key={index} className="genres_genre">{genre}ㅤ</li>)}</ul>
                            <div style={{float:"none"}}>
                                <p className="detail_runtime">Runtine :ㅤ{state.runtime}min</p> 
                                <p className="detail_rating">Rating :ㅤ{state.rating}★</p> 
                            </div>
                        </div>
                    </div>
                    <div className="detail_image">
                        <img src={state.image}  alt={state.title} title={state.title}/>
                    </div>
                    <div className="detail_summary">
                        <h5>Summary</h5>
                        <p>{state.summary}</p>
                    </div>
                </div>
            )
        }   
        else{
            return null;
        }
    }
}

export default Detail;