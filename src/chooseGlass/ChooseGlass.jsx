import React, { useState } from "react";
import "./style.css";
function ChooseGlass() {
  const [src, setSrc] = useState("/img/g4.jpg");
  return (
    <div>
      <div className="text-center mt-5">
        <img
          className="lady"
          src="./img/model.jpg"
          width="300px"
          height="auto"
        ></img>
        <img
          src={src}
          width="120px"
          height="auto"
          className="glass__model mx-2"
        />
      </div>

      <div className="glasses d-flex container-fluid align-items-center mt-5 w-75">
        <div>
          <img
            src="/img/g3.jpg"
            width="120px"
            height="auto"
            className="mx-2"
            onClick={() => setSrc("/img/g3.jpg")}
          />
          <img
            src="/img/g4.jpg"
            width="120px"
            height="auto"
            className="mx-2"
            onClick={() => setSrc("/img/g4.jpg")}
          />
          <img
            src="/img/v1.png"
            width="120px"
            height="auto"
            className="mx-2"
            onClick={() => setSrc("/img/v1.png")}
          />
          <img
            src="/img/v2.png"
            width="120px"
            height="auto"
            className="mx-2"
            onClick={() => setSrc("/img/v2.png")}
          />
          <img
            src="/img/v3.png"
            width="120px"
            height="auto"
            className="mx-2"
            onClick={() => setSrc("/img/v3.png")}
          />
          <img
            src="/img/v4.png"
            width="120px"
            height="auto"
            className="mx-2"
            onClick={() => setSrc("/img/v4.png")}
          />
          <img
            src="/img/v6.png"
            width="120px"
            height="auto"
            className="mx-2"
            onClick={() => setSrc("/img/v6.png")}
          />
          <img
            src="/img/v7.png"
            width="120px"
            height="auto"
            className="mx-2"
            onClick={() => setSrc("/img/v7.png")}
          />
          <img
            src="/img/v8.png"
            width="120px"
            height="auto"
            className="mx-2"
            onClick={() => setSrc("/img/v8.png")}
          />
        </div>
      </div>
    </div>
  );
}

export default ChooseGlass;
