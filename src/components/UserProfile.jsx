import { useContext } from "react"
import { UserContext } from "./UserContext.jsx"
function UserProfile() {
    let {userName} =useContext(UserContext)
  return (
    <div>
        <h2>username: {userName}</h2>
    </div>
  )
}

export default UserProfile