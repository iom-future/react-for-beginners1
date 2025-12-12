import React from 'react'
import ComponentB from './ComponentB'
function ComponentA({data}) {
  return (
    <div>
        <ComponentB data={data} />
    </div>
  )
}

export default ComponentA