import React from "react";

function ShoeItem({
  product,
  onSelectProduct,
  onAddToCart,
  onOpenModalDetails,
}) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} height="350px" />
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <p className="card-text">{product.price}$</p>
        <button
          className="btn btn-success"
          onClick={() => {
            onSelectProduct(product);
            onOpenModalDetails();
          }}
        >
          Xem chi tiet
        </button>
        <button
          className="btn btn-danger ms-2"
          onClick={() => onAddToCart(product)}
        >
          Them vao gio hang
        </button>
      </div>
    </div>
  );
}

export default ShoeItem;
