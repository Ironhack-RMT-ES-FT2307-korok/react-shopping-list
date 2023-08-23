import { useState } from 'react'
import './App.css'
import AddForm from './components/AddForm'
import ProductList from './components/ProductList'
import Search from './components/Search'

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

  const [ allProducts, setAllProducts ] = useState(testProducts)
  // console.log(allProducts)

  return (
    <>

      <h2>Lista de Compra</h2>

      <AddForm allProducts={allProducts} setAllProducts={setAllProducts}/>

      <Search />

      <ProductList allProducts={allProducts}/>

    </>
  )
}

export default App
