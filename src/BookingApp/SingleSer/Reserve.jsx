import { Close } from '@mui/icons-material';
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../Context/SearchContext';
import useFetch from '../Hooks/useFetch';
import "./Reserve.css";

function Reserve({setOpen, hotelid}) {
const [selected, setSelected] = useState([])
  let {data} = useFetch(`http://localhost:5000/hotel/room/${hotelid}`);
  const {dates} = useContext(SearchContext);
const navigate = useNavigate();
  const getDates=(start, end)=>{
let startDate = new Date(start)
let endDate = new Date(end)
let date = new Date(startDate.getTime());
let dates=[];
while(date<=endDate){
    dates.push(new Date(date).getTime())
    date.setDate(date.getDate()+1)
}
return dates
}
const allDates=getDates(dates[0].startDate, dates[0].endDate )

const isAvailable = (roomNumber)=>{
    const isFound = roomNumber.unavailableDates.some((date)=>allDates.includes(new Date(date).getTime()));
    console.log(isFound)
    return !isFound
}

  const handleSelect=(e)=>{
const checked = e.target.checked;
const value = e.target.value;
setSelected(
    checked ? [...selected, value] : selected.filter((item)=>item!==value)
    )
}
const handleClick=async (e)=>{
try{
    await Promise.all(selected.map(roomid=>{
        const res = fetch(`http://localhost:5000/room/avail/${roomid}`,{method:'put', 
        body: JSON.stringify({dates:allDates}),
        headers:{'Content-Type':'application/json'}
    });
return res.data

}))
}
catch(err){
    console.log(err)
}
navigate('/')
setOpen(false)
}
    return (
        <div className="rcontainer">
            <div className="rWrapper">
<h3 className="selectTitle">Select Rooms</h3>
            <Close onClick={()=>setOpen(false)} className="pab"/>

{
    data.map((item)=>
    <div className="ritem">
        <div className="rInfo">
            <div className="rTitle">{item.title.toUpperCase() }</div>
            <div className="rdesc">{item.desc}</div>
            <div className="rMaxppl">
                Max People: <b>{item.maxPeople}</b></div>
            <div className="rprice">Price: {item.price}</div>

        </div>
        {
            item.roomNumbers.map(room=>
                <div className="room">
                    <label>{room.number}</label>
                    <input type='checkbox' value={room._id} onChange={handleSelect} disabled={!isAvailable(room)}/>
                </div>
                )
        }
    </div>
    )
    
}
<button className="reservebtn" onClick={handleClick}>Reserve</button>
            </div>
        </div>
    );
}

export default Reserve;