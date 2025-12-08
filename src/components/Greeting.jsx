
const Greeting = ({timeOfDay}) => {
return timeOfDay === 'morning' ? <h1>good morning</h1>: <h1>Good afternon</h1>
//return timeOfDay === 'morning' ? (<h1>good morning</h1>): (<h1>Good afternon</h1>)
}

export default Greeting