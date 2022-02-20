import React from 'react'
import './customText.css'

/**
* @author
* @function CustomText
**/

export const CustomText = (props) => {
  return (
    <div className='customText'>
      {props.children}
    </div>
  )

}