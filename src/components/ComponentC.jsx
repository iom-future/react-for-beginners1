
//USING CONTEXT API WITH USECONTEXT() HOOK
import { useContext } from 'react'
//import the contextAPI where ever you need the prop
import { ContextAPI, ContextAPI1 } from '../App'
function ComponentC() {
    let propData = useContext(ContextAPI);
    let propData1 = useContext(ContextAPI1);
  return (
    <div>
        <h2>this is prop data 1: {propData}, this is prop data 2: {propData1}</h2>
   </div>
  )
}

export default ComponentC

/* 
when you pass a prop without using contextAPI or useContext you get you prop as an object
<ComponentA name={isaac} /> 
import it into another comoponent
 const ComponentB = (props){
 prop is an object
    props = {
        name: "isaac"
    }
 }

 but when  passing prop to using useContext and contextAPI, props get passed as the value i self than a whole object

*/
