import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./signInSingUp.css";
import SignIn from "../../components/signIn-component/signIn";
import SignUp from "../../components/signup-component/signup";

const SignInSignUpPage = () => {
  const [signin, setSignin] = useState(true);

  if (signin) {
    return (
      <div className="membershipPage">
        <NavLink to="/">
          <i class="fa-solid fa-xmark"></i>
        </NavLink>
        <SignIn setSignin = {setSignin}/>
      </div>
    );
  } else {
    return (
      <div className="membershipPage">
        <NavLink to="/">
          <i class="fa-solid fa-xmark"></i>
        </NavLink>
        <SignUp setSignin = {setSignin}/>
      </div>
    );
  }
};

export default SignInSignUpPage;
