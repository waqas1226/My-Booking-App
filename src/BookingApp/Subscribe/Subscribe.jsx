import React from 'react';
import './Subscribe.css';

function Subscribe(props) {
    return (
        <div className='SubContainer'>
            <div className="SubWrapper">
                <h1 className="Heading">Save Time Save Money</h1>
                <p>Sign up and we will send you best deals</p>
                <div className="SubInput">
                    <input type="email" className="InputEl" placeholder='Write Your Email'/>
                    <button className='SubButton' >Sabscribe</button>

                </div>
            </div>
            
        </div>
    );
}

export default Subscribe;