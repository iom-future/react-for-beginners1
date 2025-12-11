
import { createPortal } from "react-dom" 
/* 
the createPortal function of react-dom takes two parameters
createPortal(the tag/element you want to teleport out of the parent-child chain, where you wan to teleport it too)
*/
function TeleportedComponent({copied}) {

    /* the and operator for conditional rendering hecks for only one condition, just like and if statement with no else block, if this is true display this , else do nothing. use when you only need one condition , if its true display THIS, i dont care if its false(just display nothing) 
    {copied && (
            <div className="copied-message">text copied</div>
        )}

        copied is the condition and the code after && is what get returned(executed) if the condition is true, if the condition was false then it wont return anything
    */
  return createPortal (
    <div style={{position:"absolute",bottom:0}}>
        {copied && (
            <div className="copied-message">text copied</div>
        )}
    </div>, document.querySelector(".where-i-want-to-teleport-to")
  )
}

export default TeleportedComponent

