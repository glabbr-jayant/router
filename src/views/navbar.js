import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import Logo from '../assets/logo.png';
import Cart from '../assets/cart.png';
import SI from '../assets/searchIcon.png';
import './navbar.css'

const Navbar = (props) =>{
    
    return(
      //   <div className="container">
      // <br/>
      //   <div className="navbar border">
      //     <div><Link to='/'>Home</Link></div>
      //     <div><Link to='/about'>About</Link></div>
      //     <div><Link to='/contact'>Contact</Link></div>
      //   </div>
      //   </div>
<div className="Navbar">
      <nav class="navbar navbar-expand-lg navbar-light bg-light" >

<div className="container">


                        <Link className="navbar-brand" to={"/"}>
                            <img src={ Logo } alt="IIIT.com" width="120" height="24"/>
                        </Link>
                        
                        <form class="form-inline d-flex my-2 my-lg-0">
                            <input class="control-input" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="control-button my-2 my-sm-0" width="45" type="submit">
                                <img src={ SI } alt="search" width="20" height="20"/>
                            </button>
                        </form>

                        {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> */}









   
  

  <div class="set-item" id="">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active ">
      <Link to={"/productsInCart"}>
                                    <button className="btn btn-light set-item">
                                        <img src={ Cart } alt="Cinque Terre" width="35" height="25"/>
                                    </button>
                                </Link>
                            
      </li>
      <li class="nav-item">
      <Link to={'#'} ><button className="btn btn-light set-item">LogIn/SignUp</button></Link>
      </li>
      
    </ul>
    
  </div>
  </div>
</nav>
</div>
    );
}

export default withRouter(Navbar)