import React, { Component } from 'react';
import About from './about';
import Contact from './contact';
import { link } from 'react-router-dom';



const Navbar =  (props)=> { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className='navbar-brand' href='/'>
                Navbar
            </a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">
                        Home
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/about">
                        About
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/contact">
                        Contact
                    </a>
                    </li>
                    
                </ul>
            </div>
            
            <span className="badge badge-primary">{props.productsCount}</span>
            </nav>
         );
    }

 
export default Navbar;


 {/* const NavBar = props => {
     return (  
             
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <a className='navbar-brand' href='/'>
                Navbar
            </a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">
                        Home
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/about">
                        About
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/contact">
                        Contact
                    </a>
                    </li>
                    
                </ul>
            </div>
            
            <span className="badge badge-primary">{this.props.productsCount}</span>

        </nav>
       
     );
 }
 
 export default NavBar; */}


