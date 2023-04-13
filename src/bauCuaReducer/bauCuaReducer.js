const initialState = {
  tongDiemCuoc: 500,
  dsCuoc: [
    { ma: "bau", diemCuoc: 0 },
    { ma: "cua", diemCuoc: 0 },
    { ma: "tom", diemCuoc: 0 },
    { ma: "ca", diemCuoc: 0 },
    { ma: "ga", diemCuoc: 0 },
    { ma: "nai", diemCuoc: 0 },
  ],
  xucXac: ["bau", "bau", "bau"],
};

// 2)
const MANG_XX_MOI = ["bau", "cua", "tom", "ca", "ga", "nai"];

function bauCuaReducer(state = initialState, action) {
  switch (action.type) {
    case "baucua/tang_cuoc": {
      const dsCuoc = state.dsCuoc.map((item) => {
        if (item.ma === action.payload) {
          return { ...item, diemCuoc: item.diemCuoc + 100 };
        }
        return item;
      });
      const tongDiemCuoc = state.tongDiemCuoc - 100;
      return { ...state, dsCuoc, tongDiemCuoc };
    }
    case "baucua/giam_cuoc": {
      const dsCuoc = state.dsCuoc.map((item) => {
        if (item.ma === action.payload) {
          return { ...item, diemCuoc: item.diemCuoc - 100 };
        }
        return item;
      });
      const tongDiemCuoc = state.tongDiemCuoc + 100;
      return { ...state, dsCuoc, tongDiemCuoc };
    }

    case "baucua/bat_dau": {
      // 1)
      let tongDiemCuoc = state.tongDiemCuoc;
      // 2)
      const xucXac = state.xucXac.map((item) => {
        const index = Math.floor(Math.random() * 6);
        return MANG_XX_MOI[index];
      });

      // 3)
      const dsDatCuocRoi = state.dsCuoc.filter((item) => {
        return item.diemCuoc > 0;
      });

      // 4)
      dsDatCuocRoi.forEach((item) => {
        if (xucXac.includes(item.ma)) {
          tongDiemCuoc += item.diemCuoc;
        }
      });

      // 5)
      xucXac.forEach((x) => {
        const cuoc = dsDatCuocRoi.find((item) => item.ma === x);
        if (cuoc) {
          tongDiemCuoc += cuoc.diemCuoc;
        }
      });

      // 6)
      const dsCuoc = state.dsCuoc.map((item) => {
        return { ...item, diemCuoc: 0 };
      });

      return { ...state, xucXac, tongDiemCuoc, dsCuoc };
    }

    default:
      return state;
  }
}

export default bauCuaReducer;
