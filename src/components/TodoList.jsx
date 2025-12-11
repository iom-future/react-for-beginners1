import {useState} from "react"
function TodoList() {
    let [todoList, setTodoList] = useState([])//set state for the "changing" todolist
    const [inputValue, setInputValue] = useState("") //set state for the title in order to get it without e.target.value, which wont work

    //add the todo to the array of todos
    let addTodo = (e)=>{
        e.preventDefault() //prevent the form from sending data to the backend and refreshing

        //spread(carry over the) the original value to avoid mutating it, the put the new todo at the end
        setTodoList([...todoList,inputValue])
        setInputValue("");//clears the inputs field after pressing enter
    }
    const setTodo = (e)=> setInputValue(e.target.value) //use to update the title of the todo
    return (
        <div>
            <form action="">
                <label htmlFor="title"></label>
                <input type="text" id="title" onChange={setTodo} value={inputValue}/>

                <button onClick={addTodo}>Add Todo</button>

            </form>

            <div className="todo">
        
                {todoList.map((todo,index)=>(
                    <div key={index}>
                    <input type="checkbox" name="" id="todo" />
                    <label htmlFor="todo">{todo}</label>
                    </div>
                    
                ))}
            </div>
        </div>
  )
}

export default TodoList