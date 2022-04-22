import React, { useState, useEffect } from "react";
 const Login =()=> {

    const initialState = {
        email:"",
        password:'',
        
      };
      /* Set initial state */
      const [state, setState] = useState(initialState);
      /* Handel the input request */
      const handleChange = (e) => {
        const {name,value} = e.target
        setState((prevState) => {
                return { ...prevState, [name]: value };
            });
       
        };
        /* Here submit input */
        const submit = () => {
            alert("Submitted")    
        };
    return (
      <div>
          <div>
          <input type="text" name="email" value={state.email} onChange={(e) => handleChange(e)}/>
          </div>
          <div>
          <input type="text" name="password" value={state.password} onChange={(e) => handleChange(e)}/>
          </div>
        <div>
        <button  onClick={submit}><b>Submit</b></button>
        </div>
      </div>
    );
}

export default Login