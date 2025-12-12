import ComponentC from "./ComponentA"
function ComponentB({data}) {
  return (
    <div>
        <ComponentC data={data}/>
    </div>
  )
}

export default ComponentB