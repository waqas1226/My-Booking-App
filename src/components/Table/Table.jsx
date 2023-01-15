import React from 'react';
import './Table.css';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import bg7 from '../../../src/pic.jpg'

const rows = [
  {
    id:11,
    product:'Nokia',
    img:bg7,
    customer:'Ali',
    date:'1 march',
    amount:1226,
    method:'online',
    status:'approved'
  },
  {
    id:12,
    product:'Nokia',
    img:bg7,
    customer:'Ali',
    date:'1 march',
    amount:1226,
    method:'online',
    status:'approved'
  },
  {
    id:13,
    product:'Nokia',
    img:bg7,
    customer:'Ali',
    date:'1 march',
    amount:1226,
    method:'online',
    status:'approved'
  },
  {
    id:14,
    product:'Nokia',
    img:bg7,
    customer:'Ali',
    date:'1 march',
    amount:1226,
    method:'online',
    status:'approved'
  }
 
];

export default function List() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell bld'>Tracking Id</TableCell>
            <TableCell className='tableCell bld'>Product</TableCell>
            <TableCell className='tableCell bld'>Customer</TableCell>
            <TableCell className='tableCell bld'>Date</TableCell>
            <TableCell className='tableCell bld'>Amount</TableCell>
            <TableCell className='tableCell bld'>Method</TableCell>
            <TableCell className='tableCell bld'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell className='tableCell'>
                <div className="cellWrapper">
                  <img src={row.img} alt="bg" className="Img" />
                {row.product}
                </div>
                </TableCell>
              <TableCell className='tableCell'>{row.customer}</TableCell>
              <TableCell className='tableCell'>{row.date}</TableCell>
              <TableCell className='tableCell'>{row.amount}</TableCell>
              <TableCell className='tableCell'>{row.method}</TableCell>
              <TableCell className='tableCell'>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}