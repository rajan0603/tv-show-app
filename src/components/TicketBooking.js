import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css'

const TicketBooking = () => {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState(null);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [time,setTime] = useState('');
  const [flag,setFlag] = useState(false);

  useEffect(() => {
    // Fetch details for a specific show
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setShowDetails(data));
  }, [id]);

  const handleBooking = () => {
    setFlag(true);
    localStorage.setItem('userName', userName);
    localStorage.setItem('email', email);
    setEmail('');
    setUserName('');
    setTime('');
  };

  return (
    <div>
      {showDetails && (
        <div className='d-flex flex-column justify-content-center align-items-center' style={{padding:'20px'}}>
          <h1 style={{color:'green',marginTop:'30px'}}>Book Tickets for {showDetails.name}</h1>
          <label style={{color:'green'}}>Username</label>
          <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)}/>
          <label style={{color:'green',marginTop:'20px'}} >Email</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label style={{color:'green',marginTop:'20px'}}>Time</label>
          <input type="text" value={time} onChange={(e) => setTime(e.target.value)} />
          <button className='showBtn' onClick={handleBooking} style={{marginTop:'20px'}}>Book Now</button>
          {flag && (<h3 style={{color:'white',margin:'20px'}}>Booking successfully Done</h3>)}
        </div>
      )}
      
    </div>
  );
};

export default TicketBooking;
