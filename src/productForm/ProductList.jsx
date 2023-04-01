import React from "react";

function ProductList({ products, onDeleteProduct, onSelectedProduct }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Description</th>
          <th>Image</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          return (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.type}</td>
              <td>{product.description}</td>
              <td>
                <img
                  src={product.img}
                  alt={product.name}
                  width="70px"
                  height="70px"
                />
              </td>
              <td>{product.price}$</td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={() => onSelectedProduct(product)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger mx-2"
                  onClick={() => onDeleteProduct(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ProductList;
