import { useState } from "react"

function AddForm(props) {

  const [ nameInput, setNameInput ] = useState("")
  const [ priceInput, setPriceInput ] = useState(0)

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNameInput(event.target.value)

    // setNameInput(event.target.value.toUpperCase())
    // setNameInput(event.target.value.toUpperCase() + "TROL")
  }

  const handlePriceChange = (event) => {
    setPriceInput(event.target.value)
  }

  const handleSubmitForm = (event) => {
    console.log("intentando crear producto")
    event.preventDefault() // prevenir cualquier comportamiento normal del formulario

    // Queremos crear un objeto de producto, dentro de el array de productos
    let newProduct = {
      name: nameInput,
      price: priceInput
    }

    // let clone = [...props.allProducts]
    let clone = JSON.parse(JSON.stringify(props.allProducts))
    clone.unshift(newProduct)
    props.setAllProducts( clone )
    // 1. actualiza el estado
    // 2. causa un renderización nueva del component (donde esté el estado)

    console.log("el producto a crear es:", newProduct)

  }

  return (
    <div>

      <h4>Agregar un producto</h4>
      
      <form onSubmit={handleSubmitForm}>

        <label htmlFor="name">Nombre:</label>
        <input type="text" name="name" onChange={handleNameChange} value={nameInput}/>

        <br />

        <label htmlFor="price">Precio</label>
        <input type="number" name="price" onChange={handlePriceChange} value={priceInput}/>

        <br />

        <button >Agregar</button>

      </form>

    </div>
  )
}

export default AddForm