import React from "react";
import "./createTrip.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

function createTrip() {
  return (
    <div>
      <Sidebar />
      <div className="createTrip"></div>
      <div className="createTripContainer">
        <Navbar />
        <form action="">
          <input type="text" />
        </form>
      </div>
    </div>
  );
}

export default createTrip;
