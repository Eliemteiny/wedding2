import React, { useState } from 'react';
import './Page.css';
import emailjs from 'emailjs-com';

const Page6 = () => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '' });
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send data to backend
      const response = await fetch('http://localhost:3001/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_USER_ID
      );

      if (response.ok) {
        // Update the registered users list
        setRegisteredUsers([...registeredUsers, `${formData.firstName} ${formData.lastName}`]);
        // Show alert
        setAlertMessage(`${formData.firstName} ${formData.lastName} has registered!`);
        setShowAlert(true);
        // Reset form
        setFormData({ firstName: '', lastName: '' });
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error('Error submitting form: ', error);
      alert('Error adding guest info, please try again.');
    }
  };

  const closeAlert = () => {
    setShowAlert(false);
    setAlertMessage('');
  };

  return (
    <div className="page">
      <br></br>
      <h2 style={{ fontSize: '40px', fontFamily: 'Great Vibes', color: 'white' }}>Hope to see you there</h2>
      <h2 style={{ fontSize: '40px', fontFamily: 'Great Vibes', color: 'white' }}>We appreciate your confirmation before August 10</h2>
      <form onSubmit={handleSubmit} className="absolute-form">
        <div>
          <label>First Name:</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>
        <button type="submit">RSVP</button>
      </form>
      {showAlert && (
        <div className="alert">
          {alertMessage}
          <button onClick={closeAlert}>Close</button>
        </div>
      )}
     
        
      <p className='Swipeleft' style={{ bottom: '10%' }}><b> Swipe left ! </b></p>
    </div>
  );
};

export default Page6;
