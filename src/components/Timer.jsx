import { useRef,useState,useEffect } from "react"
/* the useRef here is used for state persistence even if the component re-renders, the property stored in the object wont */
function Timer() {
    let [timer,setTimer] = useState(0);
    let intervalRef = useRef(null);
    useEffect(()=>{

        //assign to the useRef variable a value to persist even if the component rerenders (because of useState)
        intervalRef.current = setInterval(()=>{
            setTimer((currentTimer)=>{
                return currentTimer+1;
            })
        },1000)

        /* THE RETURN STATEMENT IN USE EFFECT HOOK
        the return statement doesn't run on first render but when
        - When the component unmounts (removed from the screen)
        - Before the effect runs again (if dependencies change)

        USE: This cleanup function runs when component UNMOUNTS(leaves the page with the component,when user goes to another page
        WHY: to avoid memory leaks, in case the component unmount(removed fro the screen;not being used anymore) then the timer stops rather than continue for ever
        */
        return ()=>{
            clearInterval(intervalRef.current)
        }
    },[])
  return (
    <div>
        <h1>{timer}
        </h1>
        <button onClick={()=>clearInterval(intervalRef.current)}>Stop Timer</button>
        
    </div>
  )
}

export default Timer