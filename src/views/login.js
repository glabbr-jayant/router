import React, { Component } from 'react'
import './login.css'
import Logo from '../assets/logo.png';
import {Redirect} from 'react-router-dom'


class Login extends Component {


   handleClick = () => {
        this.props.history.push("/register");    
    }
   
    render() {
        
       console.log(this.props);
        return (
            // <div className='login-app'>
            //     <p className='login-heading'>Login Page</p>
            //     <div className="login">     
            //     <label className='login-lables'><b>User Name</b></label><br/>
            //     <input type="text" className='text-input' placeholder="Username" />    
            //     <br/><br/> 
            //     <label className='login-lables'><b>Password</b></label> <br/>
            //     <input type="Password" className='text-input' placeholder="Password" />    
            //     <br/> <br/>
            //     <button type='submit' className="login-but"> Login Here </button>
            //     <br />
            //     <button onClick={this.handleClick} >Register</button>                   
            //  </div>    
            // </div>
            <div className='container'>
            <br/><br/><br/>
            <div className="row main-content">
			<div className="col-md-4 text-center company__info bg-light">
				<div className="company__logo"><img src={ Logo } alt="IIIT.com" width="120" height="24"/></div>
			</div>
            <div className="add-address col-md-8 col-xs-12 col-sm-12">
            
                <h3>Register</h3>
                <form>
                    <div class="form-group col-md-11">
                      <label for="inputAddress">Name</label>
                      <input type="text" class="form-control" id="inputAddress" placeholder="Full Name" required/>
                    </div>
                    <div class="form-group col-md-11">
                      <label for="inputAddress2">Email-Id</label>
                      <input type="password" class="form-control" id="inputAddress2" placeholder="Email-Id" required/>
                    </div>
                    <div class="form-group col-md-11">
                      <label for="inputAddress">Contact</label>
                      <input type="text" class="form-control" id="inputAddress" placeholder="Contact Number" required/>
                    </div>
                    <div class="form-group col-md-11">
                      <label for="inputAddress">Password</label>
                      <input type="text" class="form-control" id="inputAddress" placeholder="Password" required/>
                    </div>
                    <div class="form-group col-md-11">
                      <label for="inputAddress">Confirm Password</label>
                      <input type="text" class="form-control" id="inputAddress" placeholder="Confirm Password" required/>
                    </div>
                    <div className='col-md-10'>
                    <button type="submit" class="btn btn-primary">Sign Up</button>
                    </div>
                </form>
                <br/>
            </div>
            </div>
            </div>
        )
    }
}

export default Login