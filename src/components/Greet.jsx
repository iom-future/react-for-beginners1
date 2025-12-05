function Greet() {
    let greeting="Hello World";
    let date = new Date();
    return (
        <div>
             <h1>{greeting}</h1>
             <p>{date.toDateString()}</p>
        </div>
       
    );
}

export default Greet