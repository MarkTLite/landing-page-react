import React from 'react'
import './section.css'
/**
* @author
* @function Section
**/

export const Section = (props) => {
  return (
    props.display
      ?
      <div className='section' id={props.id}
      style={
        {
          backgroundColor: props.bgcolor,
          display: props.display,
          marginTop: props.marginTop,                  
          backgroundRepeat: 'no-repeat',
          color: props.txtcolor,
          height: props.height,
          backgroundPosition: 'right 0% bottom 0%'         
        }
      }>
      {props.children}</div>
      :
    <div className='section' id={props.id}
      style={
        {
          backgroundColor: props.bgcolor,                          
          color: props.txtcolor,
          height: props.height,                  
        }
      }>{props.children}</div>
  )

}