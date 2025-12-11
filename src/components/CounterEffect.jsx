import React from 'react'
import { useEffect,useState } from 'react'
function CounterEffect() {
    const [count,setCount] = useState(0);
    useEffect(()=>{
        document.title = `the count is at ${count}` 
    },[count])


  return (
    <div>
        <p>{count}</p>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <button onClick={()=>setCount(count+1)}>Increment</button>
      
    </div>
  )
}

export default CounterEffect