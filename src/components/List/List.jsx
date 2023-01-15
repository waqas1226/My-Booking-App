import React, { useState } from "react";
import "./List.css";
import { useNavigate } from "react-router-dom";
import NavBar from "../NaveBar/Nav";
import SideBar from "../SideBar/SideBar";
import Chart from "../Chart/Chart";
import List from "../Table/Table";
import DataTable from "../Datatable/Datatable";

 const Lists = (props) => {
  const [question, setQuestion] = useState("");

  return (
    <div className="lists df">
      <SideBar />
      <div className="listsContainer">
        <NavBar />
        <div className="listsbottom">
            <DataTable columns={props.columns}/>
         </div>
         </div>
         </div>
         )
         }

         export default Lists;