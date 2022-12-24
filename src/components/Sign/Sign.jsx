import { Navbar } from "../Navbar/Navbar"
import { Link } from "react-router-dom"

import "./sign.css"
export const Sign=()=>{

    return (
        
        <div className="login">
         <Navbar/>
          <div className="form_container1">
           
          <div className="img-div">
              
              </div>
              <h2>Login</h2>
              <br />
              <br />
              <br />
            <form >
              <label className="label" id="lab">Email</label>
              <br />
              <br />
              <input type="text" placeholder="Email address" id="email" />
              <br />
              <br />
    
              <label id="lab">Password</label>
              <br />
              <br />
              <input type="password" placeholder="Password" id="password"  />
              <br />
              <br />
              <h4>Don't Have an account?<Link to="/signup">Register Here</Link></h4>
              <br />
              <input id="subbtn" type="submit" />
            </form>
          </div>
        </div>
      );
}