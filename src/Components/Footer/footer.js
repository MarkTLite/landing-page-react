import React from 'react'
import './footer.css'
import Button1 from '../../assets/Button.svg';
import Button2 from '../../assets/Button1.svg';
/**
* @author
* @function Footer
**/

export const Footer = (props) => {
  return(
    <div className = "footer">
      
      <p style={{marginRight:'8vw',fontWeight:'900',marginLeft:'2vw'}}>© 2022 Ice Enterprises, LLC. All rights reserved.</p>
      <div style={{marginRight:'11vw',fontWeight:'900'}}><p>Powered by <text style={{color:'#40A9FF'}}>NFT Consulting</text></p></div>
      <p style={{marginRight:'3vw',fontWeight:'900'}}>Privacy Policy</p>
      <p style={{marginRight:'3vw',fontWeight:'900'}}>Terms of Service</p>
      <div> <img className='sm-icon' src={Button1} width='40' height='40' style={{marginRight: '10px'}} />
            <img className='sm-icon' src={Button2} width='40' height='40' /></div>
    </div>
    
   )

 }