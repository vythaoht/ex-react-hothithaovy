import React from "react";
import { useSelector, useDispatch } from "react-redux";

function XucXac() {
  const { xucXac, datCuoc } = useSelector((state) => {
    const xucXac = state.bauCuaReducer.xucXac;
    const datCuoc = state.bauCuaReducer.dsCuoc.some((item) => {
      return item.diemCuoc > 0;
    });

    return { xucXac, datCuoc };
  });

  const dispatch = useDispatch();

  return (
    <div className="h-100 d-flex flex-column justify-content-center align-items-center">
      {xucXac.map((item, index) => {
        return (
          <div key={`${item.ma}-${item.index}`}>
            <img
              src={`./img/${item}.png`}
              style={{ width: 50 }}
              className="mt-2"
            />
          </div>
        );
      })}

      <button
        className="btn btn-success ps-5 pe-5 mt-5 pt-3 pb-3"
        style={{ fontSize: 25 }}
        disabled={!datCuoc}
        onClick={() => dispatch({ type: "baucua/bat_dau" })}
      >
        Xốc
      </button>
    </div>
  );
}

export default XucXac;
