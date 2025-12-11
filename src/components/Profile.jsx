import { useState } from "react"
function Profile() {
    const [profile, setProfile] = useState({name:"",age:0})
    const [inputName,setInputName]= useState("")
    const [inputAge,setInputAge]= useState()
    const updateProfile = (e)=>{

       /*  the code: inputAge?inputAge:profile.age, just translate to 
        if inputAge is an empty string(falsy value), then use the existing state, dont change age to an empty string, else use the updated state
       */
        setProfile({...profile,age: inputAge?inputAge:profile.age,name: inputName?inputName:profile.name});
        //button always has a default behavior of refreshing the page when clicked
        e.preventDefault() //prevent button refreshing-page behavior

        //clears the input after the form is submitted
        setInputAge("")
        setInputName("")
    }
    const addName = (e)=> {
        setInputName(e.target.value)
    }
     const addAge = (e)=> {
        setInputAge(e.target.value)
    }
  return (
    <div>
        <form action="">
            <label htmlFor="name">name</label>
            <input type="text" id="name" onChange={addName} value={inputName} />

            <label htmlFor="age">age</label>
            <input type="number" name="" id="age" onChange={addAge} value={inputAge} />

            <button onClick={updateProfile}>Update Profile</button>
        </form>

        <div>
            <h1> {profile.name} </h1>
            <p>age: {profile.age === "" ? <p>no age</p> : profile.age} </p>
        </div>
    </div>
  )
}

export default Profile