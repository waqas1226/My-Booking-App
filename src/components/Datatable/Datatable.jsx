import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { columns } from '../DataTablesource';
import "../Pages/Pages.css";
import useFetch from '../../BookingApp/Hooks/useFetch';
import pics from '../../pic.jpg';
import { Link, useLocation } from 'react-router-dom';


export default function DataTable(props) {
  let location = useLocation()
  let path = location.pathname.split("/")[2];
  
  const [rowData ,setRowData ] = useState();
  const {data, loading, err} = useFetch(`http://localhost:5000/${path}`)
  
  useEffect(() => {
    setRowData(data);
  }, [data]);
  let pic = require('../../pic.jpg' )
async function handleDelete(id){
  setRowData(rowData.filter(item=>item._id!=id))
  
  let result = await fetch(`http://localhost:5000/${path}/${id}`,{method:'Delete'});
  console.log(result = await result.json())
} 

console.log(rowData)


const actions = [
  
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellAction">
          <Link to={`/admin/${path}/${params.row._id}`}>
            <div className="viewBt">View</div>
          </Link>
          <div className="delBt" onClick={()=>handleDelete(params.row._id)}>Delete</div>
        </div>
      );
    },
  },

]
  


  return (
    <>
    <div className="newtop">Add new {path}
    <Link to={`/admin/${path}/new`}>Add New</Link></div>

    <div style={{ height: 400, width: '100%' }}>
    { rowData && <DataGrid
        rows={rowData}
        columns={props.columns.concat(actions)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        getRowId={row=>row._id}
        />}
    </div>
        </>
  );
}
