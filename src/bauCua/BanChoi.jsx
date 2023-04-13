import React from "react";
import { useSelector } from "react-redux";
import Cuoc from "./Cuoc";

function BanChoi() {
  const { dsCuoc } = useSelector((state) => {
    return state.bauCuaReducer;
  });
  return (
    <div className="row">
      {dsCuoc.map((item) => {
        return (
          <div className="col-4" key={item.ma}>
            <Cuoc item={item} />
          </div>
        );
      })}
    </div>
  );
}

export default BanChoi;
