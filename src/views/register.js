import React, { Component } from 'react'

class Register extends Component {
    render() {
        return (
            <div className='login-app'>
               <p className='login-heading'>Register</p>
               <div className='login'>
               <label className='login-lables'><b>E-Mail</b></label><br/>
               <input type='email' className='text-input' placeholder='E-Mail' /><br/><br/>
               <label className='login-lables'><b>User Name</b></label><br/>
               <input type="text" className='text-input' placeholder="Username" />    
               <br/><br/> 
               <label className='login-lables'><b>Password</b></label><br/>
               <input type="password" className='text-input' placeholder="Password" />    
               <br/><br/> 
               <label className='login-lables'><b>Phone Number</b></label><br/>
               <input type="text" className='text-input' placeholder="Phone Number" />    
               <br/><br/> 
               <button type='submit' className='login-but'>Submit Details</button>
               </div>
            </div>
        )
    }
}

export default Register