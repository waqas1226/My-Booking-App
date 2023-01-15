import React,{useState} from "react";
import './SideBar.css';
import { useNavigate, Link } from "react-router-dom";
import { AccountCircle, CreditCard, Dashboard, ExitToApp, InsertChartOutlined, LocalShipping, NotificationsNone, Person, Psychology, SettingsApplications, SettingsSystemDaydream, Store } from "@mui/icons-material";


const SideBar = (props) =>{
    const Navigate = useNavigate(); 

    const [ question, setQuestion ] = useState("");
    const [ answer, setAnswer ] = useState("");
    const [ catagory, setCatagory ] = useState("");
    
    return (                               

        <div className="sidebar">
            <div className="admin">My Admin</div>
           <ul className="sidebarul">
            <div className="it">MAIN</div>
            <li className="df al pd"><Dashboard/><Link to="/">Dashboard</Link> </li>
            <hr/>
            
            <div className="it">LISTS</div>
            <li className="df al pd"><Person className="sm"/><Link to="/admin/user">Users</Link> </li>
            <li className="df al pd"><Store/><Link to="/admin/hotel">Hotels</Link> </li>
            <li className="df al pd"><CreditCard/><Link to="/admin/room">Rooms</Link> </li>
            <li className="df al pd"><LocalShipping/><Link to="/Search">Delivery</Link> </li>
<hr/>

            <div className="it">USEFULL</div>
            <li className="df al pd"><InsertChartOutlined /> <Link to="/">Stats</Link></li>
            <li className="df al pd"><NotificationsNone/><Link to="/">Notifications</Link></li>
            <hr/>   
            
            <div className="it">SERVICE</div>
            <li className="df al pd"><SettingsSystemDaydream/><Link to="/">System Health</Link></li>
            <li className="df al pd"><Psychology/><Link to="/">Logs</Link></li>
            <li className="df al pd"><SettingsApplications/><Link to="/">Settings</Link></li>
            <hr/>
            
            <div className="it">USER</div>
            <li className="df al pd"><AccountCircle/><Link to="/">Profile</Link></li>
            <li className="df al pd"><ExitToApp/><Link to="/">Logout</Link></li>
            <hr/>
        </ul>
           </div>
    )
}
export default SideBar;