import React from 'react';
import './Image.css';

const Image = ({val}) => {

    return(
        <div id='imgcontainer'>
       <div id='image'>
       <img id="img" src={val} alt="" />  
       <div id="bounding"></div>
       </div>
       </div>
    )
}

export default Image;