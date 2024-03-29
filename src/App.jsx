import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import AddForm from './components/AddForm'
import ProductList from './components/ProductList'
import Search from './components/Search'

// componentes estilizados Bootstrap
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';


let testProducts = [
  {
    name: "pasta",
    price: 2
  },
  {
    name: "patatas",
    price: 1
  },
  {
    name: "agua",
    price: 0.7
  },
  {
    name: "papel de baño",
    price: 2
  }
]

function App() {

  const [ allProducts, setAllProducts ] = useState([])
  // siempre tiene TODA la info

  // otro estado que solo tiene lo que el usuario ve en la vista
  const [ productsToRender, setProductsToRender ] = useState(allProducts)


  const [ isFormShowing, setIsFormShowing ] = useState(false)

  const handleShowForm = () => {
    if (isFormShowing === false) {
      setIsFormShowing(true)
    } else {
      setIsFormShowing(false)
    }
  }

  return (
    <>

      <h2>Lista de Compra</h2>

      <hr />

      <Button variant="info" onClick={handleShowForm}>Mostrar Form</Button>

      {/* {isFormShowing === true 
      ? <AddForm 
          allProducts={allProducts} 
          setAllProducts={setAllProducts} 
          setProductsToRender={setProductsToRender}
        /> 
      : null} */}

      <Collapse in={isFormShowing}>
        <div>
          <AddForm 
            allProducts={allProducts} 
            setAllProducts={setAllProducts} 
            setProductsToRender={setProductsToRender}
          /> 
        </div>
      </Collapse>
      

      <hr />

      <Search 
        allProducts={allProducts} 
        setProductsToRender={setProductsToRender}
      />

      <hr />

      <ProductList 
        productsToRender={productsToRender}
      />

    </>
  )
}

export default App
