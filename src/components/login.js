import React, { useState } from "react";
import './Login.css';
export default function Login() {
 
    // States for registration
  const [name, setEmail] = useState('');
  const [pasword, setPassword] = useState('');
    

    const [message, setMessage] = useState("");
    const user = { 
      "uname": name, 
      "upas": pasword
    }
    console.log(user);
    let options = {
      method: 'POST',
      headers: {
          'Content-Type':'application/json;charset=utf-8'
      },
      body: JSON.stringify(user)
  }

  
  
  
   
   
    // Handling the form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      
      fetch("http://localhost:3000/Login",options)
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
      
      
      
      }
      
    

    
    
    
    
   
    return (
      <div className="form">
        <div>
          <h1>LOGIN</h1>
          <h1>{message}</h1>
        </div>
   
        
               
        <form>
          
          <label className="label">Name  </label>
          <input onChange={(e) => {
            setName(e.target.value);
          }} className="input" 
            value={name} type="text" /><br/>
   
          
          <label className="label">Password</label>
          <input onChange={(e) => {
            setPassword(e.target.value);
          }} className="input" 
            value={pasword} type="password" /><br/>
   
          <button onClick={handleSubmit} className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }


