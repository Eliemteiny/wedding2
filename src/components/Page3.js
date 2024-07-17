import React from 'react';
import './Page.css';


const Page3 = () => (
  <div className="page">
    <h1 className="text" style={{fontSize:'45px'}}><b>Wedding Ceremony</b></h1>
      <br/><br/>
      <br/><br/>  
      <br/><br/>  
        <br></br>
      <br></br>
      <img src="../images/calendar.png" width={60} height={60} />
      <br/><br/>
    <p className="" style={{fontFamily:'nell Roundhand', color: 'white',  fontSize:'30px',bottom:'50%'}}><br></br>
        August 31,2024 <br/><br/>
        7:00pm
    </p>
    
    <img src="../images/locationlogo1.png" width={60} height={60} bottom='50%'  /><br/><br/>
    <p className="" style={{fontFamily:'nell Roundhand', color: 'white',  fontSize:'30px'}}>
        Saint Nicholas Orthodox Cathedral<br/><br/>
        -Ballouneh-
    </p><br/><br/>
    <br/><br/>
    <br/><br/>
    <div className="location-map-container1">
    <a href="https://maps.app.goo.gl/SsEg8cBGvDD3CecM8" target="_blank" rel="noopener noreferrer">
      <button className="location-map-button" style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' , bottom:'90%' }}>
        Location Map
      </button>
    </a>
    </div>

    <p className='Swipeleft' style={{bottom:'-1%'}}><b> Swipe left ! </b></p>

  </div>
);

export default Page3;