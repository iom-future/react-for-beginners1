const AdminGreeting = ()=><h1>Welcome Admin</h1>
const UserGreeting = ()=><h1>Welcome User</h1>
const UserStatus = ({isAdmin,isLogged}) => {
    if(isLogged){
        return isAdmin? <AdminGreeting />:<UserGreeting/>
    }
    return(<h1>user not logged in</h1>)
}

export default UserStatus