import React from 'react'
import { Icon } from '@iconify/react';
import './feature.css'
const Feature = (props) => {
  return (
    <div className="features">
          <div className="icon">
          <Icon icon={props.icon} color="#f34f01" width="30" height="40" />
              </div>
              <div className="head">
                  <div className="head1">
                  {props.heading}
                  </div>
              
              <div className="description">
              {props.description}
                      </div>

                  </div>
                  
          </div>
  )
}
export default Feature;
