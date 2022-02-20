import React, { useState, useRef, useEffect } from "react";
import './faq.css'
import { FiMinus, FiPlus } from 'react-icons/fi'


/**
* @author
* @function FAQ
**/

export const FAQ = (props) => {
    const [active, setActive] = useState(false);

    const contentRef = useRef(null);

    useEffect(() => {
        contentRef.current.style.maxHeight = active
            ? `${contentRef.current.scrollHeight}px`
            : "0px";
    }, [contentRef, active]);

    const toggleAccordion = () => {
        setActive(!active);
    };

    return (
        <>
            <div className="faq">
                {props.qnsData.map((qns, index) => {
                    return(
                    <div>
                        <button
                            className={`question-section ${active}`}
                            onClick={toggleAccordion}
                        >
                            <div>
                                <div className="question-align">
                                    <h4 className="question-style">
                                        {qns.qn}
                                    </h4>
                                    {!active 
                                    ? 
                                    <FiPlus
                                        className={`question-icon`}
                                    />
                                    :
                                    <FiMinus
                                        className={`question-icon`}
                                    />
                                    }
                                </div>
                                <div
                                    ref={contentRef}
                                    className={active ? `answer answer-divider` : `answer`}
                                >
                                    <p>{qns.answer}</p>
                                </div>
                            </div>
                        </button>
                    </div>
                    )
                })
                }
            </div>
        </>
    );


}