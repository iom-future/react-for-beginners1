
import ComponentA from "./components/ComponentA.jsx";
function App() {
    let dataToDeeplyNestedComponent = "data for component C"
    return(<div>
       <ComponentA data={dataToDeeplyNestedComponent} />
    </div>);
}



export default App
