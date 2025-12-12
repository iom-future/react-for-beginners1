import UserProvider from "./components/UserContext.jsx";
import UpdateUser from "./components/UpdateUser.jsx";
import UserProfile from "./components/UserProfile.jsx";
function App() {
    return(<div>
        <UserProvider>
            {/* anything here is a child of the UserProvider component, and it will be passed as a prop to it 
                : ({children})=>{
                     //UserProvider code
                    }
                    the destructured children in the parameter parenthesis, are the component placed in between the UserProvider tags right here
            */}
            <UpdateUser />
            <UserProfile />
        </UserProvider>


    </div>);
}



export default App
