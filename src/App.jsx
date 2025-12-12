//USING CONTEXT API
import { createContext } from "react"; //import the context API
import ComponentA from "./components/ComponentA.jsx";

export const ContextAPI = createContext() //create an instance of the context object
function App() {
    let dataToDeeplyNestedComponent = "data for component C"
    return(<div>

        {/* wrap what needs the prop in a  Data.Provider Component; within it, is what should receive the prop */}
        <ContextAPI.Provider value={dataToDeeplyNestedComponent}>
            <ComponentA />
        </ContextAPI.Provider>
       {/* we are drilling this data into componentC  */}

    </div>);
}



export default App
