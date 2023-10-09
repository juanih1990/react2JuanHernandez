import { Table, Button, Form } from "react-bootstrap"
import { CartContext } from "../context/CartContext";
import { useState, useContext, useEffect } from "react"
import { useForm } from 'react-hook-form'
import Brief from "../checkout/brief"
import Swal from 'sweetalert2';
import styles from "./style.module.css"
const OrderItem = () => {
  ////////
  const { register , handleSubmit, 
    formState: { errors }, watch , setValue , reset} = useForm()
 ////////
  const orderContext = useContext(CartContext)
  const handleFinalizarCompra = () => {
    if ((orderContext.compra.length > 0)) {
      Swal.fire({
        icon: 'success',
        title: '¡Compra finalizada!',
        text: 'Gracias por tu compra.',
      });
      orderContext.finalizarCompra()
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
  const onSubmit = handleSubmit((data) => {
    handleFinalizarCompra()
    reset()
  }) 
  useEffect(() => {
    calcularTotal()
  }, [orderContext.compra])


  return (
    <>
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
      <Form className="container-fluid w-50" onSubmit={onSubmit}>
        {/* nombre */}
        <Form.Group className="mb-3" >
          <Form.Label htmlFor="nombre" >Nombre</Form.Label>
          <Form.Control type="text" placeholder="Nombre" name="Nombre"   
          {...register("nombre", {
            required:{
              value: true ,
              message: "El nombre es requerido"
           } ,
            minLength: {
              value: 2,
              message: "El nombre debe tener al menos 2 caracteres"
           },
            maxLength: {
              value: 20,
              message: "El nombre no puede superar los 20 caracteres"
           }
          })}
          />
           {
          errors.nombre && <span className={`${styles['errorMessage']}`}> {errors.nombre.message}</span>
        }
        
        </Form.Group>
        
       
         {/* celular */}
        <Form.Group className="mb-3" >
          <Form.Label htmlFor="celular">Celular</Form.Label>
          <Form.Control type="text" placeholder="Celular" name="Celular"  
           {...register("celular", { 
            required: { 
              value: true,
              message: "El celular es requerido"
            }, 
            minLength: {
              value: 2,
              message: "Debe tener al menos 6 numeros"
           },
            maxLength: {
              value: 20,
              message: "No puede superar los 15 numeros"
           },
           pattern: {
            value: /^[0-9]+$/,
            message: "Este campo solo acepta numeros",
          }
          })} 
           />
           {
          errors.celular && <span className={`${styles['errorMessage']}`}> {errors.celular.message}</span>
        }
        </Form.Group>

        {/* correo */}
        <Form.Group className="mb-3"> {/*  controlId="correo" */}
          <Form.Label  htmlFor="correo">Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" name="Email"  
           {...register("correo", {
            required: {
               value: true,
               message: "El correo es requerido"
            },
            pattern: {
               value: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
               message: "El correo no cumple con el patron"
            }
           })}  />
           {
          errors.correo && <span className={`${styles['errorMessage']}`}> {errors.correo.message}</span>
        }
        </Form.Group>
        <div className="d-flex justify-content-center">
        <Button  type="submit"  variant="success" >FINALIZAR COMPRA</Button>

        {/*<Button  type="submit"  variant="success"  onClick={() => {
          handleFinalizarCompra();
        }}>FINALIZAR COMPRA</Button> */}
      </div>
      </Form>
   
     
          <Brief></Brief>
    </>
  )
}

export default OrderItem