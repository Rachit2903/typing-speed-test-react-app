import React from "react";
import "./Word.css";
function Word(props){
    const {text,active,correct}=props;
    if(correct===true){
      return <span className='correct'>{props.text} </span>
    }
    else if(correct===false){
      return <span className='incorrect'>{props.text} </span>
    }
    if(active===true){
      return <span className='active'>{props.text} </span>
    }
    return <span>{props.text} </span>
  }

export default Word;