import { useState } from "react"
function ShoppingList() {
    const [shoppingList,setShoppingList] = useState([])
    const [inputName,setInputName] = useState("")//never leave the initialStateValue undefine, put a string or a number(if need be)
    const [inputQuant,setInputQuant] = useState("")
    const  addToCart =(e)=>{
            e.preventDefault()

            //the if staments makes sure that al the field are filled before updating the useState
            if(inputName&&inputQuant){
                    setShoppingList([...shoppingList,
                {name:inputName,quantity:inputQuant}])
                setInputName("")
                setInputQuant("")
            
            }else if(!inputName){
                setInputName("Add a name")
                
            }else{
                setInputQuant(404)
            }
         }
  
    const setName  =(e)=>{
        setInputName(e.target.value)
    }
    const setQuant  =(e)=>{
        setInputQuant(e.target.value)
    }
  return (
    <div>
        <form action="">
            <label htmlFor="name">name of product</label>
            <input type="text" name="" id="name" onChange={setName} value={inputName} placeholder={inputName}/>

            <label htmlFor="quantity">how many</label>

            {/* the value={inputQuant} , helps us remove the text input on the input tag after submitting */}
            <input type="number" name="" id="quantity" onChange={setQuant} value={inputQuant} placeholder={inputQuant} />

            <button onClick={addToCart}>Add to cart</button>
        </form>

        <div>
            {shoppingList.map(({name,quantity},index)=>(
                <div key={index}>
                    <h2>{name}</h2>
                    <p>{quantity}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ShoppingList