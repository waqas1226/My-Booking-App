import React, { useContext, useState } from "react";
import "./SingleSer.css";
import hotal1 from "../../hotel1.JPG";
import bg4 from "../../bg4.jpg";
import { ArrowBack, ArrowForward, Close, LocationOn } from "@mui/icons-material";
import BNavbar from "../BNavbar";
import Subscribe from "../Subscribe/Subscribe";
import Options from "../Subscribe/Options/Options";
// import SearchOp from "../Search/SearchOp/SearchOp";
import TopNav from "../TopNav";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import { SearchContext } from "../Context/SearchContext";
import { AuthContext } from "../Context/AuthContext";
import Reserve from "./Reserve";

function SingleSer(props) {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const Images=[hotal1,bg4,hotal1,bg4,hotal1,bg4];
  const [open, setOpen]=useState(false)
  const [openModal, setOpenModal]=useState(false)
  const [index, setIndex]=useState(0)
  const {dates} = useContext(SearchContext);
  const {loading, err, dispatch} = useContext(AuthContext);
    const Navigate = useNavigate();

    // useEffect(() => {
    //     const auth = localStorage.getItem("user");
    // })
  
  let {data, refetch} = useFetch(`http://localhost:5000/hotel/find/${id}`);
  // console.log(id, data)
  const ms_per_day = 1000*60*60*24;
  function dayDiff(date1, date2){
  const timeDiff = Math.abs(date2.getTime()-date1.getTime());
  const diffDays = Math.ceil(timeDiff / ms_per_day);
  return diffDays 
  }
  const nightCount = dayDiff(dates[0]?.endDate, dates[0]?.startDate)
  console.log(nightCount)
const handleClick=(i)=>{
  setOpen(true)
setIndex(i)
}
const handleMove=(dir)=>{
  let newdir;
  if(dir==='l'){
   newdir=index===0?5:index-1;
  }
  else{
newdir=index===5?0:index+1;
  }
  setIndex(newdir)
}
console.log(index)

const handleBook=()=>{
  const user = JSON.parse(localStorage.getItem("user"));
if(user){
  setOpenModal(true)
console.log(user)
}
else{
  Navigate("/login")
}
}
  return (
    <div>
      <TopNav/>
    <div className="SingleCont">
      
        {open&&<div className="Slider">
        <Close onClick={()=>setOpen(false)} className="sclose sicon"/>
        <ArrowBack onClick={()=>handleMove('l')} className="sicon"/>
        <img src={Images[index]} alt="hotal1" className="Simg" />
        <ArrowForward onClick={()=>handleMove('r')} className="sicon"/>
        </div>}

        {/* <BNavbar/> */}
      <div className="SingleWrp">
        <div className="Singledetails">
          <h2 className="h2">{data.name}{data.type}</h2>
          <span className="note0"><LocationOn/> {data.distance}km from center</span>
          <span className="note">Excelent Location</span>
          <button className="reserve">See Availability</button>
        </div>
        <div className="images">
          {Images.map((image,i)=>
          <img src={image} alt="pic" className="Singleimg" onClick={()=>handleClick(i)}/>
          )}
        </div>
      <div className="Singlebottom">
        <div className="Singledesc">
            <h2>Description</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Reprehenderit architecto doloribus fugit minima pariatur, 
                ipsam, cumque voluptatem aliquam magnam mollitia harum, 
                dolores eos quas ipsum enim? Obcaecati perspiciatis quam sunt.
            </p>
        </div>
        <div className="package">
            <h3>Perfect for a 9-night stay</h3>
            <p>gsgshdgf hgjglh llhkkjkj ljlhjglh</p>
            <span className="nights"><b>${nightCount*data.cheapest}</b><b>{nightCount} nights</b></span>
          <button className="bk" onClick={()=>handleBook()}>Reserve or Book</button>

        </div>
        </div>
      </div>
      <Subscribe/>
      <Options/>
      {
        openModal && <Reserve setOpen={setOpenModal} hotelid={id}/>
      }
    </div>
          </div>
  );
}

export default SingleSer;
