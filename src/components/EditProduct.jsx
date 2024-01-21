import React, { useState } from "react";
import { Link } from "react-router-dom";

const EditProduct = ({ editInput, handleSaveProduct }) => {
  const [product, setProduct] = useState(editInput);

  function editNameImage(e) {
    let newObj = { ...product };
    newObj.image = e.target.value;
    setProduct(newObj);
  }

  function editNameName(e) {
    let newObj = { ...product };
    newObj.name = e.target.value;
    setProduct(newObj);
  }

  function editNamePrice(e) {
    let newObj = { ...product };
    newObj.price = e.target.value;
    setProduct(newObj);
  }

  function saveChange() {
    handleSaveProduct(product);
  }

  return (
    <div>
      <section id="create">
        <div className="container">
          <div class="create">
            <h2>EDIT PRODUCT</h2>
            <input
              onChange={editNameImage}
              value={product.image}
              type="text"
              placeholder="img URL"
            />

            <input
              onChange={editNameName}
              value={product.name}
              type="text"
              placeholder="food Name"
            />
            <input
              onChange={editNamePrice}
              value={product.price}
              type="text"
              placeholder="price"
            />
            <Link to="/menu">
              <button onClick={saveChange}>SAVE</button>
            </Link>
          </div>
        </div>
        ;
      </section>
    </div>
  );
};

export default EditProduct;
