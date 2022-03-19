import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from './components/Navbar1';
import Intro from './components/Intro';
import Easy from './components/Easy';
import Products from './components/Products';
import Map from './components/Map'
import Section from './components/Section';
import { Fragment } from 'react';

import Faq from './components/Faq';
import Footer from './components/Footer';
const App = () => {
  return (
    <><Navbar1/>
    <Intro/>
    <Easy/>
    {/* <Newcard/> */}
    <Products/>
    <Map/>
    <Section title="Want to sell on Store?" text={<Fragment> You earn more by selling in Trela ​​groups. In addition to direct contact with the end customer, you <br />
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             get better margins and deliveries to multiple customers in a single location.</Fragment>} buttontext="create a group"/>
             <div className="mar"></div>
             
             <Faq/>
               <Section title="Want to sell on Store?" text={<Fragment> You earn more by selling in Trela ​​groups. In addition to direct contact with the end customer, you <br />
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             get better margins and deliveries to multiple customers in a single location.</Fragment>} buttontext="create a group"/>
            <Footer/>
            

    </>
    
  )
}
export default App;
