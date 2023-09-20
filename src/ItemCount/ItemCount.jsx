import { useContext } from "react"
import { useEffect } from "react"
import { useState } from "react"
import { Button } from "react-bootstrap"
import { ShopContext } from "../context/shopContext"
import toast, { Toaster } from 'react-hot-toast'

const ItemCount = (props) => {
  const [contador, setContador] = useState(0)
  const shopContextCount = useContext(ShopContext)

  const notify = () => toast.success('Se agrego la compra al carrito!!')

  useEffect(() => {
    setContador(0)
  }, [shopContextCount.carrito])

  const getAdd = () => {
    setContador(contador + 1)
  }
  const getTakeOut = () => {
    contador > 0 ? setContador(contador - 1) : setContador(0)
  }
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Button variant="secondary m-3" onClick={getTakeOut} >-</Button>
      <div> {contador} </div>
      <Button variant="secondary m-3" onClick={getAdd}>+</Button>
      <div>
        <Button variant="primary" onClick={() => { shopContextCount.getCarrito(contador, true); shopContextCount.getCompra(props.item[0], contador); notify() }}>AGREGAR</Button>
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
      </div>
    </div>

  )

}

export default ItemCount