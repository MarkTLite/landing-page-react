import React from 'react'
import Logo from '../../assets/Logo.svg';
import Button1 from '../../assets/Button.svg';
import Button2 from '../../assets/Button1.svg';
import './header.css';


/**
* @author
* @function Header
**/

export const Header = (props) => {
  //  NAVBAR ONSCROLL SCRIPT   
  window.addEventListener("scroll", function () {
    var header = document.querySelector(".navbar");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
  return (
    <div className="header">
      <nav className="navbar">
        <div className="navbar-mobile-label">
          <input type="checkbox" id="nav-toggle" className="nav-toggle" />
          <div className="mobile-nav">
            <ul>
            <li><a href="#howitworks">How It Works</a> </li>
            <li><a href="#benefits">Benefits</a></li>
            <li><a href="#faqs">FAQs</a></li>
            <li><a href="#team">Our Team</a></li>
            <li><a href="#ourstory">Our Story</a></li>
            </ul>
          </div>
          <label for="nav-toggle" className="nav-toggle-label">
            <span></span>
          </label>
        </div>
        <div className="logo-nav-container">
          <img
            src={Logo}
            width="80px"
            height="90px"
            className="d-inline-block align-top"
            alt="ICE logo"
          />
        </div>
        <div className="nav-menu-container">
          <ul>
          <li><a href="#howitworks">How It Works</a> </li>
            <li><a href="#benefits">Benefits</a></li>
            <li><a href="#faqs">FAQs</a></li>
            <li><a href="#team">Our Team</a></li>
            <li><a href="#ourstory">Our Story</a></li>
            <li style={{marginLeft: '20px'}}> <img className='sm-icon' src={Button1} width='40' height='40' style={{marginRight: '10px'}} />
            <img className='sm-icon' src={Button2} width='40' height='40' /> </li>
          </ul>

        </div>
      </nav>

    </div>
  )

}