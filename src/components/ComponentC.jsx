import React from 'react'
//import the contextAPI where ever you need the prop
import { ContextAPI, ContextAPI1 } from '../App'
function ComponentC() {
  return (
    <div>
        <ContextAPI.Consumer>
           {/* each ContextAPI.Consumer component must start/have with a call back function, and the call back function must return something/what consumes/uses the prop data */}
                {(propFromContextAPI)=>{
                    return(
                        <ContextAPI1>
                            {(propFromContextAPI1)=>{
                                    return <h2>this is prop data 1: {propFromContextAPI}, this is prop data 2: {propFromContextAPI1}</h2>
                            }}
                        </ContextAPI1>
                    )
                }}
           
                
        </ContextAPI.Consumer>
   </div>
  )
}

export default ComponentC