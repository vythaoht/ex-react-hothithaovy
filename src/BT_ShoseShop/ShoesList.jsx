import React from "react";
import ShoeItem from "./ShoeItem";

function ShoesList({
  products,
  onSelectProduct,
  onAddToCart,
  onOpenModalDetails,
}) {
  const handleGetProduct = (product) => {
    onSelectProduct(product);
  };

  const handleAddToCart = (product) => {
    onAddToCart(product);
  };
  return (
    <div className="row">
      {products.map((product) => {
        return (
          <div key={product.id} className="col-md-4">
            <ShoeItem
              product={product}
              onSelectProduct={handleGetProduct}
              onAddToCart={handleAddToCart}
              onOpenModalDetails={onOpenModalDetails}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ShoesList;
