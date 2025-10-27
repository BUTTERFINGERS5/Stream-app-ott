import React from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {

  const {id}= useParams();  

  const navigate = useNavigate();

  const [apiData,setapiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: ""
  })

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzE0N2I3YjY1NzI3MWQyMzk3NTM4ZDg2OGExNzIyMiIsIm5iZiI6MTc2MTU1NzIxNy4wMTQwMDAyLCJzdWIiOiI2OGZmM2FlMTg2ZTRmNWIxZmM5Mjc0NmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.g9X-kZ3BkqvhSo2WUOxPXaXL76V7gyMnAWHfF4p5jlk'
  }
};

useEffect(() => {fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setapiData(res.results[0]))
  .catch(err => console.error(err));

},[])

  return (
    <div className="player">
      <img src={back_arrow_icon} alt=""onClick={()=>{navigate(-2)}} />
      <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${apiData.key}`} title='Trailer' frameBorder="0" allowFullScreen ></iframe>
      <div className="player-info">
        <p>{apiData.name}</p>
        <p>{apiData.published_at.slice(0, 109)}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player