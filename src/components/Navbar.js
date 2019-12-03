import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';


function Navbar() {
    return (
      
        <div className="header">
           
           <Link to='/sign'><h3>Sign Out</h3></Link>
          
        </div>
        
    );
  }

export default Navbar;