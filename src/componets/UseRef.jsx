import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";




import React from 'react'

const UseRef = () => {
      const myRef = useRef(null);
      const [count, setCount] = useState(0);
      const [timerRun, setTimerRun] = useState(true)


      useEffect(()=> {
       myRef.current = setInterval(() => {
            setCount(prev => prev + 1)
            
      }, 1000);

      return () => clearInterval(myRef.current)

      }, [timerRun])
  return (
    <div>

      <h1>Timer : {count}</h1>
        <button onClick={ ()=> clearInterval(myRef.current)}>stop timer </button>
        <button onClick={()=> setTimerRun(!timerRun)}>start timer</button>

    </div>
  )
}

export default UseRef