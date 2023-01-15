import React from "react";
import './Navbar.css';

import Offerings from "./Details/Offering";
import Subscribe from "./Subscribe/Subscribe";
import Options from "./Subscribe/Options/Options";
import SearchOp from "./Search/SearchOp/SearchOp";
import TopNav from "./TopNav";

const BNavbar = () =>{

return(
    <div>
    <div className="B">

<div className="BNav">

<TopNav/>
    <div className="row3">
        <h2>A Life Time discount</h2>
        <p>Get rewarded for your travels</p>
        <button className="register">Sign in/Register</button>
    </div>
    <SearchOp/>



</div>
</div>
<Offerings/>
<Subscribe/>
<Options/>
</div>
    
)}
export default BNavbar;

