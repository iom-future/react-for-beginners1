let ProductInfo = ()=>{
    let product={
        name: "macbook",
        price: 122000,
        avaliability:"in stock"

    }
    return (
        <div>
            <h2>Product info</h2>
            <ul>
               <li>{product.name}</li>
               <li>{product.price}</li>
               <li>{product.avaliability}</li>
            </ul>
        </div>
    )
}

export default ProductInfo