
import { generate, count } from "random-words";
import { useEffect, useState } from 'react';
import Word from './Word';
import Timer from './timer';

function Test(props) {
  
  const [randomPara,setRandomPara]=useState(generate(48));
  const [userInput,setUserInput]=useState("");
  const [activeIndex,setActiveIndex]=useState(0);
  const [correctCnt,setCorrectCnt]=useState(0);
  const [correctWordArray,setCorrectWordArray]=useState([]);
  const [startTimer,setStartTimer]=useState(false);
  const [seconds,setSeconds]=useState(60);
  const [totalWords,setTotalWords]=useState(0);
  
  useEffect(()=>{
      setRandomPara(generate(48));
      setActiveIndex(0);
      setCorrectCnt(0);
      setTotalWords(0);
      setCorrectWordArray([]);
      setStartTimer(false);
      setSeconds(60);
      setUserInput("");
      props.getStart(60);
  },[props.res])

  function handleChange(event){
    const value= event.target.value;
    
    setStartTimer(true);
    setUserInput(value);
    if(value.endsWith(' ')){
      setTotalWords(totalWords+1);
      setUserInput("");
      setActiveIndex(activeIndex+1);
      const word=value.trim();
      const actualWord=randomPara[0];
      if(word===actualWord){
        setCorrectCnt(correctCnt+1);
      }
      setRandomPara((prevData)=>{
        const newArr=[...prevData];
        newArr.shift();
        newArr.push(generate());
        return newArr;
      })
      setCorrectWordArray(prevData=>{
        const newArr= [...prevData];
        newArr[0]=null;
        return newArr;
      })
    }
    else{
      
      if(value!=="" && value===randomPara[0].substring(0,value.length)){
        console.log("sdfsd " + value);
        setCorrectWordArray(prevData=>{
          const newArr= [...prevData];
          newArr[0]=true;
          return newArr;
        })
      }
      else if(value===""){
        console.log(value);
        setCorrectWordArray(prevData=>{
          const newArr= [...prevData];
          newArr[0]=null;
          return newArr;
        })
      }
      else{
        setCorrectWordArray(prevData=>{
          const newArr= [...prevData];
          newArr[0]=false;
          return newArr;
        })
      }
    }
  }
  
  function getData(seconds,minutes){
    if(seconds===0 && minutes===0){
        props.getFlag(true,correctCnt,totalWords);
    }
  }
  return (
   <div>
    <div className="flex flex-col justify-center items-center pt-4 gap-4">
      <h2 className="font-bold text-2xl text-red-100">TIME</h2>
      <div>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-3" onClick={() => {
          setSeconds(60);
          props.getStart(60);
        }}>60</button>

        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-3" onClick={() => {
          setSeconds(30);
          props.getStart(30);
        }}>30</button>

        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-3" onClick={() => {
          setSeconds(120);
          props.getStart(120);
        }}>120</button>
      </div>
    </div>

    <Timer flag={startTimer} second={seconds} getSeconds={getData} />
    <div className=" border pl-2 leading-loose font-medium  text-[1.75rem] h-{22rem} mt-3 w-{50%} mx-auto">
    <p className="text-[#646669] font-mono">
      {
        randomPara.map((word,index)=>{
          return <Word
                  text={word}
                  active={index===0}
                  correct={correctWordArray[index]}/>
        })
      }
    </p>
    </div>
    <div className="w-[50%] mx-auto mt-6 h-14" >
      <input className="w-full h-full text-3xl pl-[5px]" onChange={handleChange} value={userInput}></input>
    </div>
    <div className="w-40 mx-auto mt-7">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-full" onClick={()=>{
        setActiveIndex(0);
        setCorrectCnt(0);
        setTotalWords(0);
        setCorrectWordArray([]);
        setStartTimer(false);
        setSeconds(60);
        setUserInput("");
        props.getStart(60);
    }}>Restart</button>
    </div>
   </div>
  );
}

export default Test;


