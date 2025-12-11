import { useState } from "react"
import TeleportedComponent from "./TeleportedComponent";
function CopyText() {
    const [inputValue,setInputValue]=useState("");
    const [copied,setCopied] = useState(false);

   const copyText = ()=>{

    //copy inputValue to clip board
        navigator.clipboard.writeText(inputValue).then(()=>{
            setCopied(true);  //set is copied 
            setTimeout(()=>{setCopied(false)},2000)
        })
   }
      return (
    <div>
        
        <input type="text" onChange={e=>setInputValue(e.target.value)} />
        <button onClick={copyText} >Copy</button>
        <TeleportedComponent copied={copied} />
    </div>

   
  )
}

export default CopyText