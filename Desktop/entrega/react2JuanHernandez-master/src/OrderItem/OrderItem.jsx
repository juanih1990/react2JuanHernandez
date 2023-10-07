import { Table, Button, Form } from "react-bootstrap"
import { ShopContext } from "../context/shopContext";
import { useState, useContext, useEffect } from "react"
import Brief from "../checkout/brief"
import Swal from 'sweetalert2';
import styles from "./style.module.css"
const OrderItem = () => {
  const orderContext = useContext(ShopContext)
  const [formData, setFormData] = useState({
    Nombre: '',
    Celular: '',
    Email: '',
  })

  const resetForm = () => {
    setFormData({
      Nombre: '',
      Celular: '',
      Email: '',
    })
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleFinalizarCompra = () => {
    const formValid = formData.Nombre && formData.Celular && formData.Email;
    if (formValid && (orderContext.compra.length > 0)) {
      orderContext.setUsers(formData)
      Swal.fire({
        icon: 'success',
        title: '¡Compra finalizada!',
        text: 'Gracias por tu compra.',
      });
      orderContext.finalizarCompra()
      resetForm()
      orderContext.clearCarrito()

    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, completa todos los campos del formulario.',
      });
    }
  }

  const calcularTotal = () => {
    const totalPrecio = orderContext.compra.reduce((total, orden) => {
      return total + (orden.price * orden.cantidad)
    }, 0)
    orderContext.setTotal(totalPrecio)
  }

  useEffect(() => {
    calcularTotal()
  }, [orderContext.compra])


  return (
    <>
      <Form className="container-fluid w-50">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label >Nombre</Form.Label>
          <Form.Control type="text" placeholder="Nombre" name="Nombre" value={formData.Nombre} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Celular</Form.Label>
          <Form.Control type="text" placeholder="Celular" name="Celular" value={formData.Celular} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" name="Email" value={formData.Email} onChange={handleChange} />
        </Form.Group>
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Quitar</th>
          </tr>

        </thead>
        <tbody >
          {orderContext.compra.length > 0 ?

            orderContext.compra.map((orden, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{orden.title}</td>
                <td>{orden.cantidad}</td>
                <td>{orden.price}</td>
                <td><Button variant="danger" onClick={() => { orderContext.quitarCompra(orden.categoryid); orderContext.getCarrito(orden.cantidad, false) }}>x</Button></td>
              </tr>

            ))
            :
            <tr>
              <td colSpan="6">
                <h1>No tienes productos en tu carrito, comienza a comprar ...</h1>
              </td>
            </tr>
          }
        </tbody>
        <tfoot className={`${styles['marginTop']}`}>
          <tr>
            <td></td>
            <td>RESUMEN DE ORDEN</td>
            <td>Productos: {orderContext.carrito}</td>
            <td>$<span>{orderContext.precioTotal}</span> </td>
          </tr>
        </tfoot>

      </Table>
      <div className="d-flex justify-content-center">
        <Button variant="success" onClick={() => {
          handleFinalizarCompra();
        }}>FINALIZAR COMPRA</Button>
      </div>
          <Brief></Brief>

          {/* <h2>Detalle de Compras</h2>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
          </tr>

        </thead>
        <tbody >
        {   
        orderContext.ordenDeCompra.items.length > 0?
        orderContext.ordenDeCompra.items.map((orden, index) => (
          <tr key={index}>
            <th>{index + 1}</th>
            <td>{orden.title}</td>
            <td>{orden.cantidad}</td>
            <td>{orden.price}</td>
          </tr>

        )) 
         : 
         <tr>
           <td></td>
           <td>No se realizaron compras...</td>
         </tr>
        } 
        </tbody>
     
     </Table>   */}

    </>
  )
}

export default OrderItem