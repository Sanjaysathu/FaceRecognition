import React from 'react';
import './Inputlink.css';


const Inputlink = ({onsubmit,onchange,value}) => {
    return(
        <div>
            
        <div className="flex justify-center">
        <div className="inputtext flex justify-center">
            <input type="text" onChange={onchange} value={value} className="w-75"/>
            <button onClick={onsubmit} className="w-25 bn grow silver bg-navy" >Detect</button>
        </div>
        </div>
       
        </div>
    )
}

export default Inputlink;