import React from 'react'
import { Button } from 'react-bootstrap'
import './form.css'
/**
* @author
* @function CustomForm
**/

export const CustomForm = (props) => {
    return (
        <div className='CustomForm'>
            <div className='back-card'></div>
            <div className='front-card'>
                <div className='front-card-div'>1 ICE = 0.001 USD</div>
                <div className='front-card2'>
                    <div className='form-div1'>Rent Wearable</div>
                    <div className='form-div2'>
                        <img
                            src=''
                            width={'40px'}
                            height={'40px'}
                            style={{ backgroundColor: 'black' }}
                        />
                        <div className='form-div2-text'>
                            <p style={{ fontWeight: '600', fontSize: '14px' }}>Bomber Pants</p>
                            <p style={{ color: '#999', fontSize: '9px', marginTop: '-15px' }}>2 levels, 25% Multiplier</p>
                        </div>
                    </div>
                    <div className='form-div3'>
                        <input className='input1' style={{marginTop:'30px'}}></input>
                        <input className='input1'></input>
                        <input className='input1'></input>
                        <input className='input2'></input>
                    </div>
                    <div className='form-div4'><p>famfakfnkenfanfeifneifnfaenfiafafafaofaojfoajfoajfoajf ajfajfjfijafoaofaojf</p></div>
                    <div className='form-div5'>
                        <Button />
                        <Button />
                    </div>
                </div>
            </div>
        </div>
    )

}