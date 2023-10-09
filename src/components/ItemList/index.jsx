import { Card, Button, Container, Row, Col } from "react-bootstrap"
import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import styles from "./style.module.css"
import { CartContext } from "../context/CartContext"
import { useParams } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'

const itemList = () => {
    const estadoContext = useContext(CartContext)
    const { categoria } = useParams()

    const notify = () => toast.success('Se agrego la compra al carrito!!')

    useEffect(() => {
        estadoContext.setCategory(categoria);
    }, [categoria])
    return (
        <>

            {estadoContext.item.length > 0 ? (
                <Container className="d-flex justify-content-center align-items-center">
                    <Row>
                        {
                            estadoContext.item.map(prod => (
                                <Col key={prod.categoryid} xs={12} sm={12} md={12} lg={estadoContext.item.length > 2 ? 3 : 5} className="m-3">
                                    <Card key={prod.categoryid} style={{ width: '18rem' }} >
                                        <Card.Img variant="top" src={prod.image} className="img-fluid" />
                                        <Card.Body>
                                            <Card.Title>{prod.title}</Card.Title>
                                            <Card.Text className="d-flex justify-content-end">
                                                <span className="fw-bold">$ {prod.price}</span>
                                            </Card.Text>
                                            <div className="d-flex justify-content-between">
                                                {/* al dar agregar tengo que agregar el item al carrito de compra, si existe sumar la cantidad */}
                                                <Button variant="primary" onClick={() => {
                                                    estadoContext.getCompra(prod, 1)
                                                    estadoContext.getCarrito(0, true)
                                                    notify()
                                                }}>AGREGAR</Button>
                                                <Toaster
                                                    position="top-right"
                                                    reverseOrder={false}
                                                />
                                                <Button variant="dark" > <Link className={`${styles['alink']}`} to={`/id/${prod.categoryid}`}>Detalle</Link></Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            ) :
                <h1>cargando...</h1>}
        </>
    )
}

export default itemList