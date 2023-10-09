import { useContext } from "react"
import { Table } from "react-bootstrap"
import { CartContext } from "../context/CartContext";
const Brief = () => {
    const orderContext = useContext(CartContext)
    return (
        <>
            <h2>Detalle de Compras</h2>
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
                        orderContext.ordenDeCompra.items.length > 0 ?
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

            </Table>
        </>
    )
}

export default Brief