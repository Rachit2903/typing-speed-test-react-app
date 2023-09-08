import React from "react";

function Result(props){
    const wpm=props.cnt/(props.start/60);
    const acc=Math.floor((props.cnt/props.total)*100);
    return(

        <div className="flex flex-col justify-evenly items-center h-[28rem]">
            <div className="text-3xl font-semibold w-screen flex justify-center">
                <p className="mx-auto text-red-100">Your Score</p>
            </div>
            <div className="mx-auto bg-[#3b82f6] border w-[20%] h-40 rounded mt-5 flex flex-col justify-center items-center gap-8">
                <p className="text-2xl text-white font-mono">WPM:{wpm}</p>
                <p className="text-2xl text-white font-mono">Accuracy:{acc}%</p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-40" onClick={() => props.res(true)}>Restart</button>
        </div>
        
    )
}
export default Result;