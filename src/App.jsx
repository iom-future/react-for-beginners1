//Registering a component
//1. import it
import Greet from "./components/Greet.jsx"
import Header from  "./components/Header.jsx"
import MainContent from "./components/MainContent.jsx"
import Footer from "./components/Footer.jsx"
import WelcomeMessage from "./components/WelcomeMessage.jsx"
import JSXRule from "./components/JSXRule.jsx"
import ProductInfo from "./components/ProductInfo.jsx"
function App() {
    return(<div>
     <Greet/>
     <ProductInfo />
    </div>);
}



export default App
