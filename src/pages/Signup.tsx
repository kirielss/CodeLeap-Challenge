import React from "react";
import { useState, useEffect } from "react";

function Signup() {
    const [username, setUsername] = useState("");


  return <div className="Signup">
    <div className="card">
        <h1>Welcome to CodeLeap network!</h1>
        <label>Please enter your username
            <input type="text" id="username" name="username" />
        </label>
        <div className="button-container"><button >ENTER</button></div>
    </div>
  </div>
}

export default Signup;
