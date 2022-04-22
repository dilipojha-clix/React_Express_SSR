import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../action"

import axios from "axios";
class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[],
           };
         
    }
   
    componentDidMount(){
        
        axios.get('http://react-ssr-api.herokuapp.com/users').then((result) => {
            this.setState({ list: result.data });
        }).catch((err) => {
            
        });;
        
    }
    render(){
     //   console.log("kkkkkkk",this.props.users)
        return(
            <div>
                <h1>User List</h1>
                {this.state.list && this.state.list.map((ele,i)=>{
                    return (
                        <ul key={i}>
                            <li key={i}>{ele.name}</li>
                        </ul>
                    )
                })}
            </div>
        )
    }
}

function mapStateToProps (state) {  
      console.log("dkfnsdklnfkdlsngdfkln",state)
    return {
        users:state?state.users:[]
    };
  };

  export default connect(mapStateToProps, { fetchUsers })(UserList);