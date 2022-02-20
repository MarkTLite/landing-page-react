import React from 'react'
import { Card } from 'react-bootstrap'
import './card.css'

/**
* @author
* @function Cards
**/

export const Cards = (props) => {
    return (
        <Card style={{ width: props.width, height: props.height, borderRadius: '15px', background: props.bgcolor, boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,rgba(60, 64, 67, 0.15) 0px 1px 3px 1px'}}>
            {props.flexDirection == 'column'
                ?
                <Card.Body style={{ display: 'flex', color: props.txtcolor, flexDirection: props.flexDirection}}>
                    <div style={{padding:'10px'}}>
                        {props.image &&
                            <img
                                src={props.image}
                                width={props.imageWidth}
                                height={props.imageHeight}
                                className="d-inline-block align-top"
                                alt=""
                                style={props.style}
                            />
                        }

                    </div>
                    <div className='cardText'>
                        <Card.Title style={{ fontWeight: 600 }}> {props.title} </Card.Title>
                        <Card.Text>
                            {props.text}
                        </Card.Text>
                        {props.children}
                    </div>


                </Card.Body>
                :
                <Card.Body style={{color: props.txtcolor, flexDirection: props.flexDirection, paddingRight:'0px'}}>
                    <div className='cardText'>
                        <Card.Title style={{ fontWeight: 900, fontSize:'16px'}}> {props.title} </Card.Title>
                        <Card.Text style={{fontSize:'14px'}}> 
                            {props.text}
                        </Card.Text>
                        {props.children}
                    </div>
                    <div>
                        {props.bgimage &&
                            <img
                                src={props.bgimage}
                                width={props.imageWidth}
                                height={props.imageHeight}
                                className="d-inline-block align-top"
                                alt=""
                                style={props.style}
                            />
                        }


                    </div>

                </Card.Body>
            }
        </Card>
    )

}