import React, {useMemo, useState, useEffect, useRef, useCallback} from "react"
import "./Detail.css"

var chk = false;

function useInput(defaultValue){
    const [value, setValue] = useState(defaultValue);

    const onChange = e => {
        const {target : {value}} = e;
        setValue(value);
    };

    return {value, onChange};
}

function ClickOutSide(){
    const ref = useRef(null);
    const handleClick = e =>{
        if(!chk && ref.current && ref.current.contains(e.target)){
            alert("Write your comment. (Maximum characters : 80)");
            chk = true;
        }
    };
    useEffect(() => {
        document.addEventListener("click", handleClick)
    },[]);
    return ref;
}

function Detail (props){
    
    const {state} = props.location;
    const {history} = props;

    const [list, setList] = useState([]);
    const [comment, setComment] = useState('');
    const ref = ClickOutSide();

    const onChange = useCallback(e=>{
        setComment(e.target.value);
    }, []);

    const onInsert = useCallback(e => {
        if(comment.length === 0){
            return;
        }
        const nextList = list.concat(comment);
        setList(nextList);
        setComment('');
    },[comment, list]);
    

    if(state === undefined){
        history.push("/");
    }

    if(state){
        return (
            <div className="detail">
                <h1 className="detail_title">{state.title} <span className="detail_year">({state.year})</span></h1>  
                <div>
                        
                </div>   
                <div className="information">
                    <img src={state.poster}  alt={state.title} title={state.title} style={{width:"250px"}}/>
                    <div>
                        <p className="label_genres">Genre :ㅤ</p>
                        <ul className="detail_genres">{state.genres.map( (genre, index) => <li key={index} className="genres_genre">{genre}ㅤ</li>)}</ul>
                        <div style={{float:"none"}}>
                            <p className="detail_runtime">Runtime :ㅤ{state.runtime}min</p> 
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
                <div className="detail_comment">
                    <span>Commentㅤ</span>
                    <input value={comment} onChange={onChange} ref={ref} maxLength="80"/>
                    <button onClick={onInsert}>📝</button>
                    <ul>
                        {list.map((value, index) => (
                        <li key={index}>{value}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }   
    else{
        return null;
    }
}

export default Detail;