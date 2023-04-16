import React from "react";
import { useDispatch, useSelector } from "react-redux";

function ListSeating() {
  const { bookingSeats } = useSelector((state) => {
    return state.bookingMovieReducer;
  });
  const dispatch = useDispatch();
  const totalAMount = (list) => {
    return list.reduce((total, item) => {
      return (total += item.gia);
    }, 0);
  };

  return (
    <div>
      <h1
        className="text-center text-light mt-4 font-weight-bold"
        style={{ fontSize: 30 }}
      >
        Danh sách ghế bạn chọn
      </h1>

      <div className="d-flex flex-column mt-4">
        <div>
          <button className="btn btn-warning "></button>
          <span className="text-light ms-2">Ghế đã đặt</span>
        </div>

        <div>
          <button className="btn btn-success "></button>
          <span className="text-light ms-2">Ghế đang chọn</span>
        </div>

        <div>
          <button className="btn btn-light "></button>
          <span className="text-light ms-2">Ghế chưa đặt</span>
        </div>
      </div>

      <table className="table mt-3 table-bordered w-75">
        <thead className="text-light">
          <tr>
            <th>Số ghế</th>
            <th>Giá</th>
            <th>Huỷ</th>
          </tr>
        </thead>
        <tbody className="text-light">
          {bookingSeats.map((item, index) => {
            return (
              <tr key={index}>
                <td className="text-warning">{item.soGhe}</td>
                <td className="text-warning">{item.gia}</td>
                <td className="text-danger">
                  <button
                    className="text-danger"
                    onClick={() =>
                      dispatch({
                        type: "booking/cancel_seats",
                        payload: item.soGhe,
                      })
                    }
                  >
                    X
                  </button>
                </td>
              </tr>
            );
          })}

          <tr>
            <td>Tổng tiền</td>
            <td className="text-warning">{totalAMount(bookingSeats)}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ListSeating;
