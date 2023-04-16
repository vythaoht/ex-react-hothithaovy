import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Seating() {
  const { seatsState: seats, bookingSeats } = useSelector((state) => {
    return state.bookingMovieReducer;
  });
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="text-center text-warning mt-2">Đặt vé xem phim</h1>
      {seats.map((item, index) => {
        return (
          <div className="row" key={index}>
            <h6 className="text-light col-1">{item.hang}</h6>
            <div className="col-11 row mb-4">
              {item.danhSachGhe.map((ghe, keyGhe) => {
                const gheDuocChon = bookingSeats.find((item) => {
                  return item.soGhe === ghe.soGhe;
                });
                if (!item.hang) {
                  return (
                    <div className="col-1" key={keyGhe}>
                      <h6 className="text-light text-center ">{ghe.soGhe}</h6>
                    </div>
                  );
                }
                if (gheDuocChon) {
                  return (
                    <div className="col-1" key={keyGhe}>
                      <button
                        className="w-100 btn btn-success"
                        onClick={() =>
                          dispatch({
                            type: "booking/add_del_seats",
                            payload: ghe,
                          })
                        }
                      >
                        {ghe.soGhe}
                      </button>
                    </div>
                  );
                }
                return (
                  <div className="col-1" key={keyGhe}>
                    <button
                      style={{
                        backgroundColor: ghe.daDat ? "orange" : "white",
                      }}
                      disabled={ghe.daDat ? true : false}
                      className="w-100"
                      onClick={() =>
                        dispatch({
                          type: "booking/add_del_seats",
                          payload: ghe,
                        })
                      }
                    >
                      {ghe.soGhe}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Seating;
