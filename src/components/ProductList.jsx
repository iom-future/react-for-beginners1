const ProductList = ()=>{
    let product = [
        {id:1,name:"phone",price:20000},
        {id:2,name:"laptop",price:80000},
        {id:3,name:"tablet",price:30000}
    ]
    return(
        <div>
            {product.map(({id,name,price})=>(//destructure the elements of the product array, which is a object
                
                <ul key={id}>
                    <li>{id}</li>
                    <li>{name}</li>
                    <li>{price}</li>
                </ul>

            )

            )}
        </div>
    )
}
export default ProductList