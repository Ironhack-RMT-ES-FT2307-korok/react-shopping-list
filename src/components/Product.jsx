
function Product(props) {
  return (
    <div>

      <h5>nombre de producto: {props.product.name}</h5>  
      <p>precio: {props.product.price}</p>

    </div>
  )
}

export default Product