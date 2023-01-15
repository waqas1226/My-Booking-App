import React, { useState } from "react";
import "./Pages.css";
import NavBar from "../NaveBar/Nav";
import SideBar from "../SideBar/SideBar";
import Chart from "../Chart/Chart";
import pic from "../../../src/pic.jpg";
import List from "../Table/Table";

const Single = (props) => {
  const [question, setQuestion] = useState("");

  return (
    <div className="Single">
      <SideBar />
      <div className="SingleContainer">
        <NavBar />
        <div className="singletop">
          <div className="info">
            <button className="edit">Edit</button>
            <div className="singleimg">
              {" "}
              <img className="image" src={pic} alt="pic" />
            </div>
            <div className="details">
              <div className="title">User</div>
              <div className="field">
                <span className="label">Phone: </span>
                <span className="value">0340-5661226</span>
              </div>
              <div className="field">
                <span className="label">Email: </span>
                <span className="value">engr.waqas12@gmail.com</span>
              </div>
              <div className="field">
                <span className="label">Address: </span>
                <span className="value">AL Rahman garden </span>
              </div>
              <div className="field">
                <span className="label">Country: </span>
                <span className="value">Pakistan</span>
              </div>
            </div>
          </div>
          <div className="singlechart">
            <Chart aspect={4 / 1} />
          </div>
        </div>
        <List />
      </div>
    </div>
  );
};
export default Single;
