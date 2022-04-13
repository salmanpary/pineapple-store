import React from 'react'
import './intro.css'
// import sack from '../images/sack.jpg'
// import gro from '../images/gro.jpg'
import orange from '../images/orange.jpg'
import { Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap'


const Intro = () => {
  return (
   <>
   <div className="intro">
  
      <div className="intro_left">
      <div className="slogan">
       
        Premium products
        with discount
        and free shipping.Enjoy :) 

         
       
       </div>
       <div className="slogan1">
         Receive weekly offers and shop together with you neighbors in
         an exclusive group for you on Whatsapp
         </div>
         <div className="creategroup">
           <div className="button">
             <Button variant="danger" className='rounded-pill color ms-2' size="lg">create a group</Button>

             </div>
             <div className="animation">
             <Card  className='margin glass'>
  <Card.Body>
                   <div className="offer">
                     <div className="emoji">&#129321;</div>
                     <div className="text"> By creating a group  you will get 10 
                     tastings from our best supplier
                     </div>
                     
                    
                     </div>
                     </Card.Body>
</Card>
               

               </div>
           </div>
      </div>
      <div className="intro_right">
<img  src={orange} alt="" />

      </div>
    
       
       </div>
   </>
  )
}
export default Intro;