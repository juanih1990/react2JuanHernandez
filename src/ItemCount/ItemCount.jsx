import { useState } from "react"
import { Button } from "react-bootstrap"
const ItemCount = () => {
    const[contador,setContador] = useState(0)

    const getAdd = ()=>{
        setContador(contador + 1)
    }
    const getTakeOut = ()=>{
        contador > 0 ? setContador(contador - 1) : setContador(0)
    }
  return (
    <div className="d-flex justify-content-center align-items-center">
              <Button variant="secondary m-3" onClick={getTakeOut}>-</Button>
              <div> {contador} </div>
              <Button variant="secondary m-3" onClick={getAdd}>+</Button>
            </div>
  )
}

export default ItemCount