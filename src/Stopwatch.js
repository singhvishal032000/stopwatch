import React, { useState }  from "react";
import "./index.css"
const Stopwatch=()=>{
    const [time,setTime]=useState({hr:0, min:0, sec: 0,mill:0});
    const [status,setStatus]=useState();
    let updHr=time.hr;
    let updMin=time.min;
    let updSec=time.sec;
    let updMill=time.mill;
    const Start=()=>{
        
        setStatus(setInterval(myfun,10));

    }
    function Stop(){
        clearInterval(status);
    }
    function Reset(){
        clearInterval(status);
        setTime({hr:0,min:0,sec:0,mill:0})
    }
    function myfun(){
        if(updMill===100)
        {
            updMill=0;
            updSec++;
        }
        if(updSec===60)
        {
             updSec=0;
             updMin++;
        }
        if(updMin===60)
        {
            updMin=0;
            updHr++;
        } 
        updMill++;
        return setTime({hr:updHr,min:updMin,sec:updSec,mill:updMill})
    }
    return(
        <>
          
            <div className="container" >
              <h1> {time.hr+" : "+time.min+" : "+time.sec+" : "+time.mill}</h1>
                  <div  className="button">
                     <button className="start" onClick={Start}>Start</button>
                     <button className="stop" onClick={Stop}> Stop</button>
                     <button  className="reset" onClick={Reset}> Reset</button>
           </div>
        </div>
     
    
     </>
    );
}
export default Stopwatch;