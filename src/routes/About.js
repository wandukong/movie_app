import React, {useState, useRef, useEffect} from "react";
import "./About.css"

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
        if(ref.current && ref.current.contains(e.target)){
            alert("이름을 입력하시오.");
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClick)
    },[]);
    return ref;
}


function About(){
    const name = useInput("");
    const ref = ClickOutSide();
    console.log(name.value);
    return (
        <div>
            <h1>Use Hooks</h1>
            <br />
            {/* <input {...name} placeholder="what is your name?" /> 아래와 같음 */} 
            <div ref={ref}>
                <input value={name.value} onChange={name.onChange} placeholder="what is your name?" />
            </div>
        </div>
    );
}

export default About;