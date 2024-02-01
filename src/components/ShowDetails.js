import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css'

function ShowDetails() {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    axios.get(`https://api.tvmaze.com/shows/${id}`)
      .then(response => setShow(response.data))
      .catch(error => console.error('Error fetching show details', error));
  }, [id]);

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center' style={{width:'100%'}}>
      <h1 style={{color:'green',marginTop:'30px'}}>{show.name}</h1>
      <div className='summaryBox d-flex flex-column'>
        <p className='summaryText'>{show.summary}</p>
        <Link to={`/book-ticket/${id}`}>
          <button className='showBtn' style={{fontSize:'14px'}}>Book Tickets</button>
        </Link>
      </div>
    </div>
    
  );
}

export default ShowDetails;