import React, { useState } from "react";
import Cart from "./Cart";
import data from "./data.json";
import Modal from "./Modal";
import ShoesList from "./ShoesList";

function Shoeshop() {
  //state 1
  const [selectProduct, setSelectProduct] = useState(null);
  //state 2
  const [isOpen, setIsOpen] = useState(false);

  //state 3
  const [carts, setCarts] = useState([]);

  //state 4: isOpenModalDetails
  const [isOpenModalDetails, setIsOpenModalDetails] = useState(false);

  const handleGetProduct = (product) => {
    setSelectProduct(product);
  };

  const handleAddToCart = (product) => {
    // console.log(product);
    const index = carts.findIndex((item) => {
      return item.id === product.id;
    });
    if (index === -1) {
      const newProduct = { ...product, quantity: 1 };
      setCarts([...carts, newProduct]);
    } else {
      const newCarts = [...carts];
      newCarts[index].quantity += 1;
      setCarts(newCarts);
    }
  };

  const handleDeleteProduct = (product) => {
    let newCarts = [...carts];
    newCarts = newCarts.filter((item) => {
      return item.id != product.id;
    });
    setCarts(newCarts);
  };

  const handleUpdateProduct = (productId, quantity) => {
    const newCarts = carts.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + quantity };
      }
      return item;
    });
    setCarts(newCarts);
  };

  const totalItems = carts.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
  return (
    <div className="container">
      <h1 className="text-center my-4" style={{ color: "green" }}>
        Shoes Shop
      </h1>
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-danger" onClick={() => setIsOpen(true)}>
          Gio hang
          {totalItems > 0 && <span className="mx-2">({totalItems})</span>}
        </button>
      </div>

      <ShoesList
        onOpenModalDetails={() => setIsOpenModalDetails(true)}
        products={data}
        onSelectProduct={handleGetProduct}
        onAddToCart={handleAddToCart}
      />
      <Cart
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        carts={carts}
        onDeleteProduct={handleDeleteProduct}
        onUpdateProduct={handleUpdateProduct}
      />

      {isOpenModalDetails && (
        <Modal
          onClose={() => setIsOpenModalDetails(false)}
          productDetails={selectProduct}
        />
      )}
    </div>
  );
}

export default Shoeshop;
