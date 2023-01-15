import './Widgets.css'
import React from "react"
import { AccountBalanceWallet, KeyboardArrowUp, MonetizationOn, Person, PersonPinCircleOutlined, ShoppingCart } from '@mui/icons-material';

const Widget=({type})=> {

    let data={};
    
    switch(type){
    case "user":
    data={
    title:"USER",
    isMonay:false,
    link:"see all users",
    icon:<Person/>
    }
    break;
    
    case "balance":
    data={
    title:"BALANCE",
    isMonay:true,
    link:"see all orders",
    icon:<AccountBalanceWallet/>
    } 
    break;
    
    case "order":
    data={
    title:"ORDERS",
    isMonay:false,
    link:"see all orders",
    icon:<ShoppingCart/>
    }
    break;
    
    case "earning":
    data={
    title:"EARNINGS",
    isMonay:true,
    link:"see all earning",
    icon:<MonetizationOn/>
    }
    break;
    default:
         break;
    }
    
    return(
    <div className="widget">
    
    <div className="left">
    <div className="title">{data.title}</div>
    <div className="count">{data.isMoney && "$"} 100</div>
    <div className="link">{data.link}</div>
    </div>

    <div className="right">
    <div className="percentage ">
    <KeyboardArrowUp/>
    10%
    </div>
    {data.icon}
    </div>
    
    </div>
    
  
)}
export default Widget;