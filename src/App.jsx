//Registering a component
//1. import it

import Weather from "./components/Weather";
import UserStatus from "./components/UserStatus";
import Greeting from "./components/Greeting";
function App() {
    return(<div>
        <Weather temp={21} />
        <UserStatus isAdmin={false} isLogged={true}/>
        <Greeting timeOfDay ="morning"/>

    </div>);
}



export default App
