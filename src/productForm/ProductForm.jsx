import React, { useState } from "react";
import { useEffect } from "react";

function ProductForm({ onAddProduct, productSelecting, onReset }) {
  // 1. State quan ly cac gia tri trong o input
  const [values, setValues] = useState({
    name: "",
    type: "",
    description: "",
    img: "",
    price: "",
  });

  const handleSubmit = (evt) => {
    //2. Chan reload form
    evt.preventDefault();

    //4. Goi ham add product
    onAddProduct(values);

    //6. Goi ham Reset
    handleResetFormProduct();
  };

  //3. Ham handle change de lay gia tri input lien tuc khi nguoi dung nhap vao
  const handleChange = (evt) => {
    const { value, name } = evt.target;
    setValues({ ...values, [name]: value });
  };

  //5. Reset Form
  const handleResetFormProduct = () => {
    setValues({
      name: "",
      type: "",
      description: "",
      img: "",
      price: "",
    });
    onReset();
  };

  //6. productSelecting duoc fill len form bang cach:
  useEffect(() => {
    setValues(productSelecting);
  }, [productSelecting]);

  return (
    <div>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          value={values.name}
          name="name"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Type</label>
        <input
          type="text"
          className="form-control"
          value={values.type}
          name="type"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Desc</label>
        <input
          type="text"
          className="form-control"
          value={values.description}
          name="description"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Image</label>
        <input
          type="text"
          className="form-control"
          value={values.img}
          name="img"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Price</label>
        <input
          type="text"
          className="form-control"
          value={values.price}
          name="price"
          onChange={handleChange}
        />
      </div>
      <button type="button" className="btn btn-success" onClick={handleSubmit}>
        Submit
      </button>
      <button
        className="btn btn-secondary mx-2"
        onClick={handleResetFormProduct}
      >
        Reset
      </button>
    </div>
  );
}

export default ProductForm;
