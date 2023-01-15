import React from "react";
import './NavBar.css';
import {Link, useNavigate, useLocation} from 'react-router-dom'
import { ChatBubbleOutline, FullscreenExit, Language, LanguageOutlined, NotificationsNone, Search } from "@mui/icons-material";
import { List } from "@mui/material";
// import SearchIcon from '@mui/icons-material/Search';
// import LanguageIcon from '@mui/icons-material/Language';
// import FullScreenExitIcon from '@mui/icons-material/FullScreenExit';
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
// import ListIcon from '@mui/icons-material/List';

const NavBar = () =>{
    let location = useLocation();
    React.useEffect(()=>{
console.log(location.pathname)
    }, [location])
        

return(
<div className="nav df al">
<div className='search df al' >
<input type='text' placeholder="Search" style={{border:'none'}} />
<Search/>
</div>
<div className="NavIcons">
<div className="items" >
<Language/>
</div>

<div className="items" >
<FullscreenExit/>
</div>

<div className="items" >
<NotificationsNone/>
</div>

<div className="items" >
<ChatBubbleOutline/>
</div>

<div className="items" >
<List/>
</div>

</div>
</div>
    
)}
export default NavBar;

