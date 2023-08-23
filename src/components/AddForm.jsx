import { useState } from "react"
import { Button } from "react-bootstrap";

import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast';

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

  const [show, setShow] = useState(false);

  const handleSubmitForm = (event) => {

    console.log("intentando crear producto")
    event.preventDefault() // prevenir cualquier comportamiento normal del formulario

    if (nameInput === "" || priceInput === 0) {
      // algun campo está vacio
      setShow(true)
      return;
    }

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

    props.setProductsToRender(clone) // para actualizar despues de implementar el search

  }

  return (
    <div>

      <h4>Agregar un producto</h4>
      
      <Form onSubmit={handleSubmitForm}>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="name">Nombre:</Form.Label>
          <Form.Control type="text" name="name" onChange={handleNameChange} value={nameInput}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="price">Precio</Form.Label>
          <Form.Control type="number" name="price" onChange={handlePriceChange} value={priceInput}/>
        </Form.Group>

        <Button type="submit" variant="success">Agregar</Button>

        <Toast style={{position: "fixed", bottom: 0}} bg="danger" onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            Error en el formulario
          </Toast.Header>
          <Toast.Body>
            Todos los campos deben estar llenos
          </Toast.Body>
        </Toast>

      </Form>

    </div>
  )
}

export default AddForm