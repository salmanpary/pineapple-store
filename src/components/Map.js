import React from 'react'
import map1 from '../images/map1.PNG'
import './map.css'
import { Button } from 'react-bootstrap'
const Map = () => {
  const data  = [{
    place:'Kochi',
    place2:'Model Engineering college Thrikkakara'
  },
  {
    place:'Kochi',
    place2:'Model Engineering college Thrikkakara'
  },
  {
    place:'Kochi',
    place2:'Model Engineering college Thrikkakara'
  }]
  return (
    <div className="map">
      <div className="headingm">
        And Where are the Pineapple store groups?
        
        </div>
        <div className="mapimage ms-2 me-4 my-3">
          <img className='rounded' src={map1} alt=""/>

          </div>
          
      
           
          <div className="row">
            {data.map((datas)=>(
              
                <div className=" col-lg-4  col-md-12 col-sm-12 pt-5 col-xl-3">

<h2 className='res'>{datas.place}</h2>
<p>{datas.place2}</p>

</div>

              


))}
</div>
           
            


            
         
            
            
            
            <div className="button2 ms-4 me-5">
            <Button variant="danger" className='rounded-pill color ms-2' size="lg" >create a group</Button>
            
            </div>

      </div>
  )
}
export default Map;
