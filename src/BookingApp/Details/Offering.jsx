import React,{useEffect, useState} from "react";
import './Offerings.css';
import pic from '../../hotel1.JPG';
import useFetch from "../Hooks/useFetch";

const Offerings = () =>{
    // const [typecount, setTypecount] = useState([]);
    // const [citycount, setCitycount] = useState([]);...;
    
    let citycount = useFetch('http://localhost:5000/hotel/countbycity?cities=lahore,karachi,waqas').data;
    let typecount = useFetch('http://localhost:5000/hotel/countbytype').data;
    let featured = useFetch('http://localhost:5000/hotel?featured=true&limit=4&min=10&max=200').data;
 console.log(featured)
return(

<div className="Offerings">

<div className="rows df fdc">

{<>
<div className="city df al">
    <div className="card">
        <img src={pic} alt="pic" className="cityimg" />
        <h3>Lahore</h3>
        <span>{citycount[0]} Properties</span>
    </div>
    <div className="card">
        <img src={pic} alt="pic" className="cityimg" />
        <h3>Karachi</h3>
        <span>{citycount[1]} Properties</span>
    </div>
    <div className="card">
        <img src={pic} alt="pic" className="cityimg" />
        <h3>Islamabad</h3>
        <span>{citycount[2]} Properties</span>
    </div>
</div>


<div className="prptype df">
    <h2 className="titl">Browse by Type</h2>
    <div className="cards">
        {typecount.map((hotal, i)=>
    <div className="carddetail" key={i}>
        <img src={pic} alt="pic" className="cityimg" />
        <h3>{hotal?.type}</h3>
        <span>{hotal?.count} {hotal?.type}</span>

    </div>
    )}
   
    </div>
</div>



<div className="prptype df">
    <h2 className="titl">Featured</h2>
    <div className="cards">
    {featured.map((hotal, i)=>
    <div className="card" key={i}>
        <img src={pic} alt="pic" className="cityimg" />
        <div className="carddetail">
        <h3>{hotal?.name}</h3>
        <span>{hotal?.city}</span>
        <h4>Starting from ${hotal?.cheapest}</h4>
        </div>

    </div>
)}
    {/* <div className="card">
        <img src={pic} alt="pic" className="cityimg" />
        <div className="carddetail">
        <h3>Perl Continental</h3>
        <span>Lahore</span>
        <h4>Starting from $100</h4>
        </div>
        
    </div>
    <div className="card">
        <img src={pic} alt="pic" className="cityimg" />
        <div className="carddetail">
        <h3>Perl Continental</h3>
        <span>Lahore</span>
        <h4>Starting from $100</h4>
        </div>
    </div>
    <div className="card">
        <img src={pic} alt="pic" className="cityimg" />
        <div className="carddetail">
        <h3>Perl Continental</h3>
        <span>Lahore</span>
        <h4>Starting from $100</h4>
        </div>
    </div> */}
    </div>
</div>
</>
}
</div>
</div>
)
}

export default Offerings;