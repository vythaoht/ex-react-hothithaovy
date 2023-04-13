import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Cuoc({ item }) {
  // 1)
  const imgSrc = `./img/${item.ma}.png`;
  // 2)
  const dispatch = useDispatch();
  const tangCuoc = () => {
    dispatch({ type: "baucua/tang_cuoc", payload: item.ma });
  };
  const giamCuoc = () => {
    dispatch({ type: "baucua/giam_cuoc", payload: item.ma });
  };

  // 3)
  const { tongDiemCuoc } = useSelector((state) => {
    return state.bauCuaReducer;
  });

  return (
    <div>
      <div className="text-center mt-5">
        <img src={imgSrc} style={{ width: 250 }} />
        <br />
        <br />
        <span
          className="p-4 ps-3 pe-3 bg-warning mt-2"
          style={{ borderRadius: "5%", fontSize: 25 }}
        >
          Cược:
          <button
            className="btn btn-success ml-2 mr-2"
            style={{ fontSize: 20 }}
            onClick={tangCuoc}
            disabled={tongDiemCuoc === 0}
          >
            +
          </button>
          <span className="text-success">{item.diemCuoc}</span>
          <button
            className="btn btn-success ml-2 mr-2"
            style={{ fontSize: 20 }}
            onClick={giamCuoc}
            disabled={item.diemCuoc === 0}
          >
            -
          </button>
        </span>
      </div>
    </div>
  );
}

export default Cuoc;
