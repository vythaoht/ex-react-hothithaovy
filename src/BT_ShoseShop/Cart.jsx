import React from "react";

function Carts({ isOpen, onClose, carts, onDeleteProduct, onUpdateProduct }) {
  if (!isOpen) {
    return null;
  }
  return (
    <>
      <div
        className="modal fade show"
        style={{ display: "block" }}
        tabIndex={-1}
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Gio hang</h5>
              <button
                className="btn-close"
                aria-label="Close"
                onClick={onClose}
              />
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Ma san pham</th>
                    <th>Ten san pham</th>
                    <th>Hinh anh</th>
                    <th>So luong</th>
                    <th>Don gia</th>
                    <th>Thanh tien</th>
                    <th>Xoa</th>
                  </tr>
                </thead>
                <tbody>
                  {carts.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>
                          <img
                            src={item.image}
                            alt="{item.name}"
                            height="70px"
                            width="70px"
                          />
                        </td>
                        <td>
                          <button
                            className="btn btn-light p-0 mx-2"
                            onClick={() => onUpdateProduct(item.id, -1)}
                            disabled={item.quantity === 1}
                          >
                            -
                          </button>
                          {item.quantity}
                          <span></span>
                          <button
                            className="btn btn-light p-0 mx-2"
                            onClick={() => onUpdateProduct(item.id, 1)}
                          >
                            +
                          </button>
                        </td>
                        <td>{item.price}$</td>
                        <td>{item.quantity * item.price}$</td>
                        <td>
                          <button
                            className="btn btn-warning"
                            onClick={() => {
                              onDeleteProduct(item);
                            }}
                          >
                            Xoa
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" />
    </>
  );
}

export default Carts;
