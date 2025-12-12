//in real-life scenarios , we have a central file with contextAPI, that has the data that should get passed to multiple components
import { createContext,useState } from "react"
export let UserContext = createContext(); //the contextAPI that will provide the data to other component


function UserProvider({children}) {
    let [userName, setUserName] = useState("") //data i want to pass using contextAPI
    const updateName = (newName)=>{
        setUserName((previousName)=>{
          return newName?newName:previousName; //makes sure user enter a name before pressing the update button
        })
    } 

  return (
      <div>
          <UserContext.Provider value={{userName,updateName}}>
              {/* the data(which is stored in the value variable) is passed to [and accessible by] all the children of the UserProvider component  */}
              {children} 
          </UserContext.Provider>

      </div>
  )
}

export default UserProvider


/**
 Note:
 - you export the contextAPI variable(UserContext = createContext()) to where you actually need the data, and is a child of the UserProvider Component
 - you export the component(UserProvider) in the App component, or where it's children(the children of the UserProvider) would be rendered (mostly App)
 */