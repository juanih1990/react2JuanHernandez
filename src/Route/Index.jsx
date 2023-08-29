// This is a React Router v5 app
import NavBar from "../NavBar/Index"
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import ItemListContainers from "../ItemListContainer/Index";
import ItemDetailContainer from "../ItemDetailContainer"

const RouteIndex = () => {
  return (
    <BrowserRouter>
     <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainers />} />
        <Route path="/categoria/:categoria" element={<ItemListContainers />} />
        <Route path="/id/:id" element={<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>
  );

}

export default RouteIndex