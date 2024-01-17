import { Route, Routes, json } from "react-router-dom";
import "./App.css";
import Admin from "./components/Admin";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Orders from "./components/Orders";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  function addProduct(newProduct) {
    let data = JSON.parse(localStorage.getItem("product")) || [];
    data.push(newProduct);
    localStorage.setItem("product", JSON.stringify(data));
    readProduct();
  }

  function readProduct() {
    let data = JSON.parse(localStorage.getItem("product")) || [];
    setData(data);
  }
  function deleteProduct(id) {
    let data = JSON.parse(localStorage.getItem("product")) || [];
    let deleteItems = data.filter((el) => el.id !== id);
    localStorage.setItem("product", JSON.stringify(deleteItems));
    readProduct();
  }
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/menu"
          element={
            <Menu
              data={data}
              readProduct={readProduct}
              deleteProduct={deleteProduct}
            />
          }
        />
        <Route path="/admin" element={<Admin addProduct={addProduct} />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      {/* <Admin />
      <Menu />
      <Orders /> */}
    </div>
  );
}

export default App;
