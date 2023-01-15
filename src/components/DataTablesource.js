import React from "react";
import { Link } from "react-router-dom";
import pic from "../pic.jpg";

export const usercolumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "img",
    headerName: "User",
    width: 160,
    renderCell: (params) => {
      return (
        <div className="cellwithimg">
          <img className="cellimg" src={pic} alt="dsa" />
          {params.row.username}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", width: 100 },
  { field: "country", headerName: "Country", width: 70 },
  { field: "city", headerName: "City", width: 70 },
  { field: "phone", headerName: "Phone", width: 70 },
 
];

export const hotelcolumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "img",
    headerName: "Hotel",
    width: 160,
    renderCell: (params) => {
      return (
        <div className="cellwithimg">
          <img className="cellimg" src={pic} alt="dsa" />
          {params.row.name}
        </div>
      );
    },
  },
  // { field: "name", headerName: "Name", width: 100 },
  { field: "type", headerName: "Type", width: 70 },
  { field: "city", headerName: "City", width: 70 },
  { field: "title", headerName: "Title", width: 70 },
 
];

export const roomcolumns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "title", headerName: "Title", width: 70 },
  { field: "price", headerName: "Price", width: 70 },
  { field: "maxPeople", headerName: "MaxPeople", width: 70 },
  { field: "desc", headerName: "Description", width: 70 },
 
];