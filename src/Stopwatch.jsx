import React,{useState} from "react";  

 const Stopwatch = () => {

    const [time, setTime] = useState({hr:0,min:0,sec:0});


    const startTime = () => {
        
    }
    return (
        <div>
            
            <h1>{time.hr}:{time.min}:{time.sec}</h1>
            <button onClick={startTime}>Start</button>
            <button>Stop</button>
            <button>Reset</button>
        </div>
    )
}   

export default Stopwatch;
