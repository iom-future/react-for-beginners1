import { useRef } from "react"
/* the use ref here is used for accessing a dom element  */
function FocusInput() {
    //just like accessing element through the DOM
    // let inputElement= document.querySelector("input")
    let inputElement = useRef(null);
    let focusInputElement=()=>{
        inputElement.current.focus()
    }
  return (
    <div>
        <input type="text" ref={inputElement} />
        <button onClick={focusInputElement}>Focus Input Element</button>
    </div>
  )
}

export default FocusInput