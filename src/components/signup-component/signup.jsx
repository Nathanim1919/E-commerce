import React from "react";
import { NavLink } from "react-router-dom";
import './signup.css';

class SignUp extends React.Component {
  render() {
    return (
      <div className="signUpForm">
        <div>
          <h2 style={{placeSelf:"end"}}>Welcome</h2>
          <p>Create Acount</p>
        </div>
        <form>
          <input type="text" placeholder="Enter your Email" />
          <input type="password" placeholder="Enter your password" />
          <input type="password" placeholder="Confirm your password" />
          <input type="submit" value="Sign up" />
        </form>
        <NavLink onClick={() => this.props.setSignin(true)} className='backtosignin'>have an account?</NavLink>
      </div>
    );
  }
}

export default SignUp;
