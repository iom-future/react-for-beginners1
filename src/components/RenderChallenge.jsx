const  RenderChallange = ()=>{
    const animals = ["Dog", "Cat", "Lion"];
      
    return(
        <div>
            {animals.map((animal,index)=>
               (
                <h2 key={index}>{index +1}. {animal}</h2>
               )
            )}
        </div>
    )
}

export default RenderChallange