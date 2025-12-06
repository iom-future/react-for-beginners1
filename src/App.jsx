//Registering a component
//1. import it

import UserList from "./components/UserList.jsx"
import ProductList from "./components/ProductList.jsx";
import Renderchallenge from "./components/RenderChallenge.jsx"
import Person from "./components/Person.jsx";
import Product from "./components/Product.jsx";
import ChildrenProps from "./components/ChildrenProps.jsx";
function App() {
    return(<div>
     <Person name="IOM" age={17} />
     <Product name="laptop" price={90000} />
     <ChildrenProps>
        <h1>children prop heading</h1>
        <p>children props paragraph</p>
     </ChildrenProps>
    </div>);
}



export default App
