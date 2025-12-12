//USING CONTEXT API WITH USECONTEXT() HOOK
import { createContext } from "react"; //import the context API
import ComponentA from "./components/ComponentA.jsx";

export const ContextAPI = createContext() //create an instance of the context object
export const ContextAPI1 = createContext() //create a second instance of the context object
function App() {
    let dataToDeeplyNestedComponent = "prop for component C";
    let  dataToDeeplyNestedComponent1 = "second prop for component C"
    return(<div>
        <ContextAPI.Provider value={dataToDeeplyNestedComponent}>
            <ContextAPI1.Provider value={dataToDeeplyNestedComponent1} >
                 <ComponentA />
            </ContextAPI1.Provider>
           
        </ContextAPI.Provider>
       {/* we are drilling this data into componentC  */}

    </div>);
}



export default App
