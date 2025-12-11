import { useState } from "react"
function Counter() {
    let [count,setCount] = useState(0);
    let increment = ()=> setCount(count+1);
  return (
    <div>
        <p>{count}</p>
        <button onClick={increment}>increment</button>
    </div>
  )
}

export default Counter