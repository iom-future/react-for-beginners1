import { useContext,useState } from "react"
//get the contextAPI [stored in the UserContext variable], this is what holds the data
import { UserContext } from "./UserContext.jsx" //import
function UpdateUser() {
    let{updateName}= useContext(UserContext) //the useContext hook to get the data from the contextAPI
    let [inputValue,setInputValue] = useState("")
    const updateUserName =  (e)=>{
            e.preventDefault();//crucial
           updateName(inputValue)
            setInputValue("")
    }
    const updateUserInput = (e)=>{
        setInputValue(e.target.value)
    }
  return (
    <div>
        <form onSubmit={updateUserName}>
            <label htmlFor="userName">
                <input type="text" id="userName" onChange={updateUserInput} value={inputValue} placeholder="input your name" />
            </label>
            <button type="submit">Update</button>
        </form>
    </div>
  )
}

export default UpdateUser