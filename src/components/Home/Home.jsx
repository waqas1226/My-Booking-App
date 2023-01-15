import React,{useState} from "react";
import './Home.css';
import { Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Chart from "../Chart/Chart";
import Featured from "../Featured/Featured";
import NavBar from "../NaveBar/Nav";
import SideBar from "../SideBar/SideBar";
import Widget from "../Widgets/Widgets";
import List from "../Table/Table";


const Home = (props) =>{
    const Navigate = useNavigate(); 

    const [ question, setQuestion ] = useState("");
    const [ answer, setAnswer ] = useState("");
    const [ catagory, setCatagory ] = useState("");

    return (

        <div className="Home">
            <SideBar/>
            <div className="main">
            <NavBar/>
            <div className="widgets">
            <Widget type="user"/>
            <Widget type='balance'/>
            <Widget type='order'/>
            <Widget type='earning'/>
            </div>
            <div className="Feachart">
            <Featured/>
            <Chart aspect={3/2}/>
            </div>
            <List/>
            </div>
        </div>
    )
}
export default Home;