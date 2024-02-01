import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../App.css"

function ShowList() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios.get('https://api.tvmaze.com/search/shows?q=all')
      .then(response => {
        setShows(response.data)
        console.log(response.data)
    })
      .catch(error => console.error('Error fetching shows', error));
  }, []);

  return (
    <div>
      <h1 style={{color:'green',textAlign:'center',marginTop:'30px'}}>TV Shows</h1>
      <div className='d-flex direction-column flex-wrap justify-content-center align-items-center'>
        {shows.map(show => (
            <div className='showCard'>
              <h3>{show.show.name}</h3>
              <p>Language: {show.show.language}</p>
              <p>Rating: {show.show.rating.average}</p>
              <Link to={`/show/${show.show.id}`}>
                  <button className='showBtn'>
                    summary
                  </button>
              </Link>
            </div>
            
        ))}
      </div>
    </div>
  );
}

export default ShowList;