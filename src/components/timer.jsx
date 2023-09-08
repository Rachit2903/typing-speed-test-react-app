import React, { useEffect, useState } from "react";


function Timer(props) {
  const initialState=(Math.floor(props.second/60))?0:props.second;
  const [seconds, setSeconds] = useState(initialState);
  console.log(seconds);
  const [text, setText] = useState("start");
  const initialState2=(Math.floor(props.second/60))?props.second/60:0;
  const [minutes,setMinutes]=useState(initialState2);
  console.log(minutes);
  const [heading, setHeading] = useState("");
  useEffect(()=>{
    setSeconds(initialState);
    setMinutes(initialState2);
  },[props.second,props.flag]);

  useEffect(() => {
    const timer = setInterval(() => {
   
      if (seconds>0 && props.flag) {
        setSeconds(seconds - 1);
      } 
      if(seconds===0 && minutes!==0 && props.flag){
        setMinutes(minutes-1);
        setSeconds(59);
      }
      props.getSeconds(seconds,minutes);
    }, 1000);

    return () => clearInterval(timer);
  },[seconds,props.flag]);
  return (

    <div className=" bg-[#3b82f6] w-80 h-20 mx-auto mt-6 flex justify-center items-center  rounded">
      <p className="text-3xl font-bold text-white">{minutes<1?"00":minutes}:{seconds<10?`0${seconds}`:seconds}</p>
    </div>
  );
}

export default Timer ;
