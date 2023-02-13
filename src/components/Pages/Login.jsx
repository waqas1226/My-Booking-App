import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../../BookingApp/Context/AuthContext";
// import { AuthContextadmin } from "../Context/AuthContext";

const Button = styled.button`
/* Adapt the colors based on primary prop */
background: "white";
color:  ${props => props.inputColor || "palevioletred"};

font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`;
const AdminLogin = () => {

    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");
    const { loading, err, dispatch } = useContext(AuthContext);
    const Navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem("user");
    })
    const handleLogin = async (e) => {
        e.preventDefault();
        // console.log(username, password); 
        dispatch({ type: "loginstart" })
        // console.log(dispatch)
        try {
            let res = await fetch('http://localhost:5000/user/login', {
                method: 'post',
                body: JSON.stringify({ username, password }),
                headers: { 'Content-Type': 'application/json' }

            })
            res = await res.json();
            console.log(res, 'res')


            if (res.username) {
                localStorage.setItem("user", JSON.stringify(res));
                dispatch({ type: 'loginsuccess', payload: res })
                Navigate('/admin')
            }
        }
        catch (err) {
            dispatch({ type: 'loginfail', payload: err.response })
            console.log(err.response)

        }
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div>
                <h1> Login admin</h1>
                <input type='username' placeholder="username" value={username} onChange={(e) => setusername(e.target.value)} />
                <input type='password' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button inputColor="black" type='submit' onClick={handleLogin}>Login</Button>
            </div>
        </div>


    )
}

export default AdminLogin;



