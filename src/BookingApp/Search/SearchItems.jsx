import React, { useState } from 'react';
import './SearchItems.css';
import pic from '../../hotel1.JPG';
import htl from '../../bg4.jpg';
import { Link, useNavigate } from 'react-router-dom';

function SearchItems({ data }) {
    // const [result, setResult] = useState([data]);

let navigate = useNavigate();

    
    return (
        <div className='SICont'>
            {data.length>0 && data.map((hotel)=>
            <div className="SIWrp br" key={hotel?._id}>
                <img src={pic} alt="pic" className="SIimg" />
                <div className="SIdetails">
                    <h2>{hotel?.name}</h2>
                    <span className='db'>{hotel?.distance}km from center</span>
                    <span className='istaxi'>Free Airport taxi</span>
                    <h4>Stodio Apartments</h4>
                    <span>1 full bed</span>
                </div>
                <div className="SIstatus">
                    <div className="SItop">
                        <h4>Excelent</h4>
                        <span className='SIcount'>8.9</span>
                    </div>
                    <span className='SIprice'>Starting from ${hotel?.cheapest}</span>
<Link to={`/search/${hotel._id}`}>
                    <button className="isavailable cp" >See Availability</button>
                    </Link>
                </div>
            </div>)}


        </div>
    );
}

export default SearchItems;