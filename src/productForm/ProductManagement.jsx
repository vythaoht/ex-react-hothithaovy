import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import Search from "./Search";

function ProductManagement() {
  //1. Tao state de luu tru Products
  const [products, setProducts] = useState([]);

  //6. Tao state de quan ly user dang duoc chon
  const [selectedProduct, setSelectedProduct] = useState({});

  //8. Tao state quan ly gia tri searchString khi ng dung nhap vao lien tuc
  const [searchByUser, setSearchByUser] = useState("");

  //2. Call API
  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://63e86419ac3920ad5beb7b3b.mockapi.io/api/products",
        {
          params: {
            name: searchByUser || undefined,
          },
        }
      );

      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //==> Goi api render bang useEffect
  useEffect(() => {
    fetchProducts();
  }, [searchByUser]);

  //3. Xoa api tu server khi click delete
  const handleDelete = async (productId) => {
    try {
      await axios.delete(
        `https://63e86419ac3920ad5beb7b3b.mockapi.io/api/products/${productId}`
      );
      //Goi lai ham render de hien thi lai api moi nhat, sau khi xoa thanh cong
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  //4. De click submit: Ham add product vao mang da co
  const handleAdd = async (product) => {
    const { id, ...payload } = product;
    try {
      if (id) {
        await axios.put(
          `https://63e86419ac3920ad5beb7b3b.mockapi.io/api/products/${id}`,
          payload
        );
      } else {
        await axios.post(
          `https://63e86419ac3920ad5beb7b3b.mockapi.io/api/products`,
          payload
        );
      }
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  //5. Ham nhan vao 1 user duoc chon de EDIT
  const handleSelectedProduct = (product) => {
    setSelectedProduct(product);
  };

  //7. Tao ham luu tru gia tri search, phai tu Search dua len day de Management gui len API thi moi tra ve ket qua
  const handleSearch = (searchString) => {
    setSearchByUser(searchString);
  };

  return (
    <div className="container-fluid">
      <div>
        <h1 className="text-center my-4">Products Management</h1>

        <div className="card">
          <div className="card-header bg-secondary text-light text-center">
            Product Form
          </div>
          <div className="card-body">
            <ProductForm
              onAddProduct={handleAdd}
              productSelecting={selectedProduct}
              onReset={() => setSelectedProduct({})}
            />
          </div>
        </div>

        <div>
          <Search onSearch={handleSearch} />
        </div>

        <div>
          <ProductList
            products={products}
            onDeleteProduct={handleDelete}
            onSelectedProduct={handleSelectedProduct}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductManagement;
