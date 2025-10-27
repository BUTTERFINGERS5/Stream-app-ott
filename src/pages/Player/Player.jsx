import React, { useEffect, useState } from 'react';
import './Player.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer YOUR_BEARER_TOKEN'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => {
        if (res.results && res.results.length > 0) {
          // pick first YouTube trailer
          const trailer = res.results.find(video => video.site === "YouTube" && video.type === "Trailer") || res.results[0];
          setApiData(trailer);
        } else {
          setApiData({ name: "No trailer available", key: "", published_at: "", type: "" });
        }
      })
      .catch(err => {
        console.error(err);
        setApiData({ name: "No trailer available", key: "", published_at: "", type: "" });
      });
  }, [id]);

  return (
    <div className="player">
      <img src={back_arrow_icon} alt="" onClick={() => navigate(-1)} />

      {apiData.key ? (
        <iframe
          width="90%"
          height="90%"
          src={`https://www.youtube.com/embed/${apiData.key}`}
          title="Trailer"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      ) : (
        <p style={{ color: "white", fontSize: "18px", textAlign: "center", marginTop: "50px" }}>
        </p>
      )}

      <div className="player-info">
        <p>{apiData.name}</p>
        <p>{apiData.published_at?.slice(0, 10)}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
