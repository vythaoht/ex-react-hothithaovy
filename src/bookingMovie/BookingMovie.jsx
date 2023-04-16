import React, { useState } from "react";
import ListSeating from "./ListSeating";
import Seating from "./Seating";

function BookingMovie() {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(./img/bgmovie.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <div className="row">
        <div className="col-8">
          <Seating />
        </div>
        <div className="col-4">
          <ListSeating />
        </div>
      </div>
    </div>
  );
}

export default BookingMovie;
