import React from 'react';
import Particle from './Particle';
import {Link} from 'react-router-dom';
import './Sign in.css';

const SignIn = () =>{


    return(<div>
        <header className="signinheader">
            <Link to='/register'><h3>Register</h3></Link>
        </header>
            <Particle />
            <article className="mw5 center bg-transparent br3 pa3 pa4-ns mv3 ba b--black-10 shadow-5" style={{marginTop:'20vh'}}>
               <div className="tc">
               
               <main className="black-80">
                <form className="measure center">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" required/>
                </div>

                <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" required/>
                </div>
                
                </fieldset>
                <div className="" >
                <Link to='/'><input className="b pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Sign in" style={{width:'100%'}} /></Link>
                </div>
            </form>
            </main>
            </div>
            </article>   
            </div>
    )  
}

export default SignIn;