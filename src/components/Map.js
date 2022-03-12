import React from 'react'
import map1 from '../images/map1.PNG'
import './map.css'
import { Button } from 'react-bootstrap'
const Map = () => {
  return (
    <div className="map">
      <div className="headingm">
        And Where are the Pineapple store groups?
        
        </div>
        <div className="mapimage">
          <img className='rounded' src={map1} alt="" width="1236px" height="480px"/>

          </div>
          <div className="locations">
          <div className="location">
            <div className="headingloc">
            Kochi
              </div>
            
            <div className="address">
              Model Engineering college<br/>
              Thrikkakara
              </div>
            </div>
            <div className="location">
            <div className="headingloc">
            Kochi
              </div>
            
            <div className="address">
              Model Engineering college<br/>
              Thrikkakara
              </div>
            </div>
            <div className="location">
            <div className="headingloc">
            Kochi
              </div>
            
            <div className="address">
              Model Engineering college<br/>
              Thrikkakara
              </div>
            </div>
            
            <div className="button2">
            <Button variant="danger" className='rounded-pill color' size="lg">create a group</Button>
              </div>
            </div>
          

      </div>
  )
}
export default Map;
