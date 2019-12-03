import React from 'react';
import Particles from 'react-particles-js';

const Particle = () =>{
    return(
        <Particles
        className="particle"
params={{
  "particles": {
      "number": {
          "value": 100
      },
      "size": {
          "value": 3
      }
  },
  "interactivity": {
      "events": {
          "onhover": {
              "enable": true,
              "mode": "repulse"
          }
      }
  }
}} />

    )
}

export default Particle;