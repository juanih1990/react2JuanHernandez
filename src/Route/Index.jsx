// This is a React Router v5 app
import NavBar from "../NavBar/Index"
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import ItemListContainers from "../ItemListContainer/Index";
import ItemDetailContainer from "../ItemDetailContainer";
import ShopComponentContext from "../context/shopContext"
import Order from "../Order";



const RouteIndex = () => {
  return (
    <ShopComponentContext>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainers />} />
          <Route path="/categoria/:categoria" element={<ItemListContainers />} />
          <Route path="/id/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Order />} />
        </Routes>
      </BrowserRouter>
    </ShopComponentContext>
  );

}

export default RouteIndex