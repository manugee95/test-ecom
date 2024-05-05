import { useContext } from "react"
import EcomContext from "../context/EcomContext"

function Products() {
  const {product} = useContext(EcomContext)

  console.log(product);

  return (
    <div>
        
    </div>
  )
}

export default Products