import { Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./components/Admin";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Orders from "./components/Orders";
import { useState } from "react";
import EditProduct from "./components/EditProduct";

function App() {
  const [data, setData] = useState([]);
  const [orders, setOrders] = useState([]);
  const [editInput, SetEditInput] = useState({});

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

  function addtoOrders(id) {
    let order = JSON.parse(localStorage.getItem("product_orders")) || [];
    setOrders(orders);
    let data = JSON.parse(localStorage.getItem("product")) || [];
    if (orders.some((item) => item.id === id)) {
      alert("1 munite");
    } else {
      let findItem = data.find((el) => el.id === id);
      orders.push(findItem);
      localStorage.setItem("product_orders", JSON.stringify(findItem));
    }
  }

  function readOrders() {
    let orders = JSON.parse(localStorage.getItem("product_orders")) || [];
    setData(orders);
  }

  function editProduct(index) {
    SetEditInput(data[index]);
  }

  function handleSaveProduct(newProduct) {
    let data = JSON.parse(localStorage.getItem("product")) || [];
    let newData = data.map((el) => {
      if (newProduct.id === el.id) {
        return newProduct;
      }
      return el;
    });
    localStorage.setItem("product", JSON.stringify(newData));
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
              addtoOrders={addtoOrders}
              editProduct={editProduct}
            />
          }
        />
        <Route path="/admin" element={<Admin addProduct={addProduct} />} />
        <Route
          path="/orders"
          element={<Orders addtoOrders={addtoOrders} readOrders={readOrders} />}
        />
        <Route
          path="/edit/:id"
          element={
            <EditProduct
              editInput={editInput}
              handleSaveProduct={handleSaveProduct}
            />
          }
        />
      </Routes>
      {/* <Admin />
        <Menu />
        <Orders /> */}
    </div>
  );
}

export default App;
