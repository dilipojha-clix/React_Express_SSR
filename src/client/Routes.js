import React from 'react'
import {Route} from "react-router-dom";
import Menu from './components/Menu'
import Home from './components/Home'
import About from './components/About'
import UserList from './components/UserList'
  
  
export default () =>{
    return (
        <div>
            <Menu/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/users" component={UserList}/>
        </div>
    )
}