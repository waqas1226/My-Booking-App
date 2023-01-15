import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const Navigate = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if (auth) Navigate("/")
    }) 

    return (
        <div>
            <h1> Register Here</h1>
            <input type='text' placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type='email' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type='password' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type='submit' onClick={Collectdata}>Signup</button>
        </div>
    )
}
export default Signup;