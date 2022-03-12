import React from 'react'
import { Button } from 'react-bootstrap';
import './section.css'
const Section = (props) => {
  return (
    <div className="section">
        <div className="child">
        <div className="caption">
            {props.title}
            </div>
            <div className="descri">
                {props.text}
           
            </div>
                <div className="button3">
                <Button variant="danger" className='rounded-pill color1' size="lg">{props.buttontext}</Button>
                    
                    </div>
            </div>
        
        </div>
  )
}
export default Section;
