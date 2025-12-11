import React from 'react'
import { useEffect } from 'react'

/* the use effect is used to perform an action when a components data changes and it causes the component to rerender */
function BasicEffect() {
    //when the dependency array is empty, it runs only once; when the components load/render
    useEffect(()=>{
        console.log("from useEffect callback fn")
    },[])
  return (
    <div>BasicEffect</div>
  )
}

export default BasicEffect