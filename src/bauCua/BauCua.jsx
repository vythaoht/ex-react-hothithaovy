import React from "react";
import BanChoi from "./BanChoi";
import XucXac from "./XucXac";
import { useSelector } from "react-redux";

function BauCua() {
  const { tongDiemCuoc } = useSelector((state) => {
    return state.bauCuaReducer;
  });
  return (
    <div className="container-fluid bg-dark" style={{ minHeight: "150vh" }}>
      <h1 className="text-center text-warning pt-3">Bầu Cua Cá Cọp</h1>

      {/* Hien thi so tien co de choi */}
      <div className="row">
        <div className="col-12 text-center">
          <div className="text-center mt-3">
            <span
              className="p-3 bg-warning"
              style={{
                fontSize: 25,
                borderRadius: 10,
                border: "5px solid rgb(0, 0, 0)",
              }}
            >
              Tiền thưởng: <span className="text-success">{tongDiemCuoc}</span>
            </span>
          </div>
        </div>
      </div>

      <div className="row">
        {/* Hien thi ban cuoc ra gom 6 o con vat */}
        <div className="col-8">
          <BanChoi />
        </div>

        {/* Hien thi xuc xac */}
        <div className="col-4">
          <XucXac />
        </div>
      </div>
    </div>
  );
}

export default BauCua;
