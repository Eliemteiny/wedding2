import React from 'react';
import './Page.css';


const Page4 = () => (
  <div className="page">
    <h1 className="text" style={{fontSize:'45px'}}><b>Wedding Dinner</b></h1>
      <br/><br/>
      <br/><br/>
      <br/><br/>
<br></br><br></br>

    <div style={{bottom:'50%'}}>
      <img src="../images/calendar.png" width={60} height={60} />
      <br/><br/>
    <p className="" style={{fontFamily:'nell Roundhand', color: 'white', fontSize:'30px' }}><br></br>
        August 31,2024 <br/><br/>
      
    </p></div>
    
    <img src="../images/locationlogo1.png" width={60} height={60} style={{bottom:'70%'}} /><br/><br/>
    <p className="" style={{fontFamily:'nell Roundhand  ', color: 'white',fontSize:'30px'}}>
       Jardin De Stone<br/><br/>
        -Zouk Mikael-
    </p><br/><br/>

    <div className="location-map-container"><br/><br/>
    <a href="https://maps.app.goo.gl/A85eD3qJBV2nFZ7r6" target="_blank" rel="noopener noreferrer">
      <button className="location-map-button" style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' , bottom:'90%' }}>
        Location Map
      </button>
    </a>
    </div>

    <p className='Swipeleft' style={{bottom:'-1%'}}><b> Swipe left ! </b></p>

  </div>
);

export default Page4; 