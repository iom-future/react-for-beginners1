import { counterReducer } from "../assets/counterReducer"
import { useReducer,useState } from "react"
function UseReducerCounter() {
    let [state,dispatch]=useReducer(counterReducer,{count:0});
    let [inputValue, setInputValue] = useState("")
  return (
    <div>
        <h1>your counter is : {state.count}</h1>
        <button onClick={ ()=>{dispatch({type:"increment"});setInputValue("")}}>increment</button>
        <button onClick={()=>{dispatch({type:"decrement"});setInputValue("")}}>decrement</button>
        <button onClick={()=>{dispatch({type:"reset"});setInputValue("")}}>reset</button>
        {/* the input value of a type="number" is string, dont mind the "number" type */}
        <input type="number" onChange={(e)=>{setInputValue(parseInt(e.target.value))}} value={inputValue}/>
        <button onClick={ ()=>{dispatch({type:"incrementBy",incrementBy:inputValue});setInputValue("")}}>increment by {inputValue}</button>
         <button onClick={()=>{dispatch({type:"decrementBy",decrementBy:inputValue});setInputValue("")}}>decrement by {inputValue}</button>
    </div>
  )
}

export default UseReducerCounter