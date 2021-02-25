import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Details = () => {
  const { season, episode } = useParams();
  const [episodeData, setEpisodeData] = useState(null);

  useEffect(() => {
    const fetchEpisode = async () => {
      const resp = await fetch(
        `http://api.tvmaze.com/shows/530/episodebynumber?season=${season}&number=${episode}`
      );
      const data = await resp.json();
      setEpisodeData(data);
    };
    fetchEpisode();
  }, [season, episode]);

  return (
    <>
      {episodeData && (
        <div>
          <h1>{episodeData.name}</h1>
          <p>{episodeData.summary}</p>
          <h3>{episodeData.runtime}</h3>
          <h3>{episodeData.airdate}</h3>
          <img src={episodeData.image.original} alt="seinfeld" />
        </div>
      )}
    </>
  );
};

export default Details;
