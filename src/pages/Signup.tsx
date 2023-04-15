import React from "react";
import { useState, useEffect } from "react";

function Signup() {
    const [username, setUsername] = useState("");

    useEffect(() => {
      if (username.length >= 3) {
        toggleButton(true)
      } else {
        toggleButton(false)
      }
    })

    function toggleButton(on: boolean) {
      if (on) {
        document.querySelector(".button-container button")?.classList.add("button-active")
      } else {
        document.querySelector(".button-container button")?.classList.remove("button-active")
      }
    }

    function submitUser() {
      if (username.length >= 3) {
        console.log("User submitted: " + username)
      }
    }

  return <div className="Signup">
    <div className="card">
        <h1>Welcome to CodeLeap network!</h1>
        <label>Please enter your username
            <input type="text" id="username" name="username" required onChange={(e) => setUsername(e.target.value)} />
        </label>
        <div className="button-container"><button onClick={submitUser}>ENTER</button></div>
    </div>
  </div>
}

export default Signup;
