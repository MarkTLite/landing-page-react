import React from 'react'
import './customButton.css'
import buttonbck from '../../assets/buttonbck.png'

/**
* @author
* @function CustomButton
**/

export const CustomButton = (props) => {
  return(
      <>
    <div className='CustomButton' style={props.style}>
      {props.text}
        
      </div>
     
    
    </>
   )

 }