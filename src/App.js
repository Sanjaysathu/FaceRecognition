import React,{useState} from 'react';
import Navbar from './components/Navbar';
import Logo from './components/Logo';
import Inputlink from './components/Inputlink';
import Image from './components/Image';
import './App.css';
import Particle from './components/Particle';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import SignIn from './components/Sign in';
import Clarifai from 'clarifai';
import Register from './components/Register';
import createBrowserHistory from 'history/createBrowserHistory';


function App() {
  
  
  const app = new Clarifai.App({
    apiKey: '69ced5c2d63348d4adc9c5abe1135329'
   });

  onsubmit = () =>{
    app.models.predict("a403429f2ddf4b49b307e318f00e528b",val).then(
    (response) => {
      console.log(response);
      var disp = document.getElementById("img");
      const width = disp.width;
      const height = disp.height;
      const bb = response.outputs[0].data.regions[0].region_info.bounding_box;
      const left = bb.left_col*width;
      const top = bb.top_row*height;
      const right = width - bb.right_col*width;
      const bottom = height - bb.bottom_row*height;
      const bound = document.getElementById('bounding');
      console.log(bound);
      bound.style.border = '3px solid rgb(26, 73, 85)';
      bound.style.top = top + 'px';
      bound.style.left = left + 'px';
      bound.style.right = right + 'px';
      bound.style.bottom = bottom + 'px';
    },
    function(err) {
      console.log(err);
    }
  );
  }
  
  
  const [val,setVal] = useState('');
  var onchange = (e) =>{
      setVal(e.target.value);
      const bounde = document.getElementById('bounding');
      bounde.style = '0px';
  }


  
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div>
      <Switch>

      <Route path='/' exact>
        <Navbar />
        <Logo />
        <Inputlink onsubmit={onsubmit} onchange={onchange} value={val} /> 
        <Particle />
        <Image val={val}/>
      </Route>
      
      <Route path='/sign' component={SignIn} />

      <Route path='/register' component={Register} />

      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
