import React, { Component, useState } from "react";
import Test from "./components/Test";
import Result from "./components/Result";

function App() {
  const [isEnd,setIsEnd]=useState(false);
  const [correctCnt,setCorrectCnt]=useState(0);
  const [startTime,setStartTime]=useState(60);
  const [totalWords,setTotalWords]=useState(0);
  const [isRestart,setRestart]=useState(false);
  function getData(flag,cnt,totalCnt){
    if(flag){
      setIsEnd(true);
      setCorrectCnt(cnt);
      setTotalWords(totalCnt);
    }
  }

  function getTime(sec){
    setStartTime(sec);
  }
  function getRestart(res){
    if(res){
      setIsEnd(false);
    }
    setRestart(res);
  }
  return (
   <div className="h-screen bg-slate-800 w-screen">
      <div className="bg-[#ffb288] flex justify-center items-center h-24 ">
        <h1 className="font-bold text-4xl text-red-200">Typing Speed Test</h1>
      </div>
      
    {isEnd?<Result cnt={correctCnt} start={startTime} total={totalWords} res={getRestart} />:<Test getFlag={getData} getStart={getTime} res={isRestart} />}
  
    
   </div>
  );
}

export default App;
