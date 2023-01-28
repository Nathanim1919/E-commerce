import React, { Component} from "react";
import { NavLink } from "react-router-dom";
import "./signIn.css";


class SignIn extends Component{
 
  constructor(props){
    super(props);
    this.state =  {
      email:"",
      password:""
    }
  }

   handleChange = (e) => {
     const {value,type} = e.target;
     this.setState({
        [type]:value
     })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      email:'',
      password:""
    })
  };

  render(){ 
    return (
      <div className="signupPage">
      <div className="signUpForm">
        <div>
          <h2>Welcome Back!</h2>
          <p>I already have an account</p>
          <p>Sign in with your eamil and passowrd</p>
        </div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="email"
            className="email"
            placeholder="Enter your email"
            value={this.state.email}
            />
          <input
            onChange={this.handleChange}
            type="password"
            className="password"
            placeholder="Enter your password"
            value={this.state.password}
            />
          <input type="submit" value="Sign In"/>
        </form>
        <button className="signinwithgoogle">Sign in with google</button>
        <NavLink onClick={() => this.props.setSignin(false)} className='createnewacount'>don't you have an account?</NavLink>
      </div>
    </div>
  );
}
};

export default SignIn;
