import React from 'react'
//import the contextAPI where ever you need the prop
import { ContextAPI } from '../App'
function ComponentC() {
  return (
    <div>
        <ContextAPI.Consumer>
                {/*the consumer components takes a call back function (while the provider takes the component you want to pass data into) */}
                {/* the call back function returns the element that use he prop that was provided */}
                {(props)=>{
                    return(<h1>{props}</h1> )
                }}
        </ContextAPI.Consumer>
   </div>
  )
}

export default ComponentC