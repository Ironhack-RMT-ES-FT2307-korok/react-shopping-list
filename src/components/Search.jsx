import { useState } from "react"

function Search(props) {

  const [ queryInput, setQueryInput ] = useState("")

  const handleSearch = (event) => {
    console.log(event.target.value)
    setQueryInput(event.target.value)

    // ? para con event.target.value saber cuales concuerdan con el query
    // props.allProducts
    // event.target.value
    // props.setAllProducts

    const filteredArr = props.allProducts.filter((eachProduct) => {
      if (eachProduct.name.startsWith(event.target.value) === true) {
        return true
      } else {
        return false
      }
    })

    console.log(filteredArr)
    props.setProductsToRender(filteredArr)


  }

  return (
    <div>
      
      <form>

        <label htmlFor="query">Buscar</label>
        <input type="text" name="query" value={queryInput} onChange={handleSearch}/>

      </form>

    </div>
  )
}

export default Search