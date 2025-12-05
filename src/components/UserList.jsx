//if you add JS in between(or within) a html tag the JS code ust be wrapped within a {}
function UserList() {
    let users = [
        {id:1,name:"Alice",age:30},
        {id:2,name:"Bob",age:25},
        {id:3,name:"Charlie",age:35}];
    return (
    
        <div>
      {users.map(user =>
         (<ul key={user.id}>
            <li>Name: {user.name}</li>
            <li>Age: {user.age}</li>
            <li>ID: {user.id}</li>
         </ul>)
        )
    }

        
        </div>
  )
}

export default UserList