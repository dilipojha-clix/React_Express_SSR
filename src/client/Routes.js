import React from 'react'
import {
    Link,
    Route,
   
  } from "react-router-dom";
  import Home from './components/Home'
  import About from './components/About'
  
  
export default () =>{
    return (
        <div>
            <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          
        </ul>

        <hr />
        </div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
        </div>
    )
}