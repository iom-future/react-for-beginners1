
//inine styling is an object
const Style = () => {
    const style={
        color: "red",
        backgroundColor: "pink"
    }
  return (
    <div>
        <h1 style={{color:"blue", backgroundColor:"black"}}>Inline style</h1>
        <h1 style={style}>in line object styling</h1>
    </div>
  )
}

export default Style