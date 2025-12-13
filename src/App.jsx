import { useFetch } from "./hooks/useFetch.js";

function App() {
    let {data, loading, error} = useFetch("https://jsonplaceholder.typicode.com/users")
    
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>
    
    return (
        <div>
            <h1>All The Users</h1>
            <ul>
                {data && data.map((person) => (
                    <li key={person.id}>{person.name}</li> 
                ))}
            </ul>
        </div>
    )
}

export default App
