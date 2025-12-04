//Registering a component
//1. import it
import Greet from "./components/Greet.jsx"
import Header from  "./components/Header.jsx"
import MainContent from "./components/MainContent.jsx"
import Footer from "./components/Footer.jsx"

function App() {
    return<div>
       <Header/>
       <MainContent />
       <Footer />
    </div>;
}



export default App
