import React from "react";

function Modal({ onClose, productDetails }) {
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
              <h5 className="modal-title">Chi tiet san pham</h5>
              <button
                className="btn-close"
                aria-label="Close"
                onClick={onClose}
              />
            </div>
            <div className="modal-body">
              <div className="mt-3 row">
                <h3 className="text-center">{productDetails.name}</h3>
                <div className="col-sm-4">
                  <img
                    src={productDetails.image}
                    alt={productDetails.name}
                    width="100%"
                    height="350px"
                  />
                </div>
                <div className="col-sm-8">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>Ten san pham</td>
                        <td>{productDetails.name}</td>
                      </tr>
                      <tr>
                        <td>Gia</td>
                        <td>{productDetails.price}$</td>
                      </tr>
                      <tr>
                        <td>Gioi thieu</td>
                        <td>{productDetails.description}</td>
                      </tr>
                      <tr>
                        <td>So luong</td>
                        <td>{productDetails.quantity}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
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

export default Modal;
