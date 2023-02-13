import React, {useContext} from 'react';

import {Link} from 'react-router-dom'
import { Bed, CarRental, Flight } from "@mui/icons-material";
import { AuthContext } from './Context/AuthContext';
// import { SearchContext } from "../Context/SearchContext";
// import { AuthContext } from "../Context/AuthContext";

function TopNav() {
  const {user} = useContext(AuthContext);
  
    return (
        <div className='topnav'>
                <div className="row1 df al">
        <Link to='/' style={{textDecoration: 'none'}}><h5 className="title" >My Booking App</h5></Link>
       { user? (user.username):(
       <div className="r1buttons df al">
        <button className="register">Register</button>
        <button className="register">Login</button>
        </div>
         )
         } 
    </div>
    <div className="row2">
    <ul className="Bul">
            <li className="bli"><Bed/><Link to="/stays">Stays</Link> </li>
            <li className="bli"><Flight /><Link to="/flights">Flights</Link> </li>
            <li className="bli"><CarRental/><Link to="/carrentals">Car Rentals</Link> </li>
            <li className="bli"><Bed/><Link to="/attr">Attractions</Link> </li>
            <li className="bli"><CarRental/><Link to="/taxi">Taxi</Link> </li>
    </ul>
    </div>
        </div>
    );
}

export default TopNav;