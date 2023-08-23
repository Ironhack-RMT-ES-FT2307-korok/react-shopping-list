import Product from "./Product"

function ProductList(props) {
  console.log(props.allProducts)
  return (
    <div>
      
      <h4>Productos</h4>

      {/* ejemplo de renderizar varios productos */}
      {/* <Product />
      <Product />
      <Product /> */}

      {props.allProducts.map((eachProduct, i) => {

        return (
          // <Product name={eachProduct.name} price={eachProduct.price}/>
          <Product key={i} product={eachProduct}/>
        )

      })}

    </div>
  )
}

export default ProductList
