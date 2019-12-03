import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import AI from './AI.png';

const Logo = () => {
    return(
       <Tilt className="Tilt" 
        options={{ max : 25 }} 
        style={{ height: 200, width: 200 }} >
        <img src={AI} alt="" style={{width:'100px',height:'100px'}}/>
        </Tilt>
    )
}

export default Logo;