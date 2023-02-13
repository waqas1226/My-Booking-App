import React, { useState, useEffect } from "react";
import "./Pages.css";
import { useNavigate } from "react-router-dom";
import pic from "../../../src/pic.jpg";
import SideBar from "../SideBar/SideBar";
import NavBar from "../NaveBar/Nav";
import { DriveFolderUpload } from "@mui/icons-material";
import styled from "styled-components";
// import { app } from "../../firebase";
// import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import e from "cors";
import useFetch from "../../BookingApp/Hooks/useFetch";


const New = ({ inputs, title, url }) => {
  const [question, setQuestion] = useState("");

  const [img, setImg] = useState(undefined)
  const [imgperc, setImgperc] = useState(0)
  const [dwnUrl, setDwnUrl] = useState({})
  const [hotelId, setHotelId] = useState(undefined)
  const [featured, setFeatured] = useState(undefined)
  const [inputData, setInputData] = useState({});
  const [rooms, setRooms] = useState([]);
  const { data } = useFetch("http://localhost:5000/hotel/")
  const handleChange = e => {
    // if (url == 'hotel') {
    //   setInputData(prev => {
    //     return { ...prev, [featured]: featured }
    //   })
    // }
    setInputData(prev => {
      return { ...prev, [e.target.name]: e.target.value }
    })
    console.log(inputData)
  }
  console.log(data)
console.log(featured)
  const handleClick = async e => {
    if (url == 'room') {
      let roomNumbers = rooms.split(",").map(room => ({ number: room }))
      console.log(roomNumbers)
      setInputData(prev => {
        return { ...prev, [roomNumbers]: roomNumbers }
      })
    }
   
    console.log(inputData)

    let added = await fetch(`http://localhost:5000/${url}/${hotelId || 'add'}`, {
      method: 'post',
      body: JSON.stringify(inputData),
      headers: { 'Content-Type': 'application/json' }
    })
    added = await added.json();
    console.log(added)
    setDwnUrl(prev => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }



  return (
    <div className="new">
      <SideBar />
      <div className="newcontainer">
        <NavBar />
        <div className="newtop">{title}
        </div>

        <div className="newbottom">
          <div className="newleft">
            <img className="newimg" src={pic} alt="dsa" />
            <div className="nupload">
              <label htmlFor="file">
                <DriveFolderUpload />
              </label>
              {/* {imgperc > 0 ? ('uploading:' + imgperc) : <input style={{ display: 'none' }} type='file' accept="image/*" onChange={(e) => setImg(e.target.files[0])} />} */}
            </div>
          </div>

          <div className="newright">
            <form>

              {inputs.map((inp, i) =>
                <div className="inputdiv" key={i}>
                  <label>{inp.label}</label>
                  <input type={inp.type} className="inputcell" name={inp.placeholder} onChange={handleChange} placeholder={inp.placeholder} />
                </div>
              )}
              {url == 'room' && <>
                <div className="inputdiv">
                  <label>Select Hotel</label>
                  <select className="inputcell" onChange={e => setHotelId(e.target.value)}>
                    {data.map((hotel, i) =>
                      <option value={hotel._id} key={hotel._id}>{hotel.name}</option>
                    )}
                  </select>
                </div>
                <div className="inputdiv">
                  <label>Rooms</label>
                  <input type="text" className="inputcell" onChange={e => setRooms(e.target.value)} />
                </div>
              </>}

              {
              url == 'hotel' && <>
                <div className="inputdiv">
                  <label>Featured</label>
                  <select className="inputcell" name='featured' onChange={handleChange}>
                      <option value='true'>Yes</option>
                      <option value='false'>No</option>
                  </select>
                </div>
                </>
                }
            </form>
            <div className="nsubmitdiv ">
              <button className="nfsubmit" onClick={handleClick}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default New;
