
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./SignIn.css";
import { auth } from "./firebase";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function SignIn() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
    setRegisterEmail("")
    setRegisterPassword("")
  };

  return (
    <div className="sign__in">
      <div>
        <h3> Sign Up </h3>
        <input
          placeholder="Enter Email"
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          placeholder="Enter Password"
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
        <button onClick={register}> Sign Up </button>
        <Link to="/home">Go to Home</Link> 
      </div>
      <div>
      </div>
    </div>
  );
}

export default SignIn;
