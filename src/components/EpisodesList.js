import React, { useState } from "react";
import { Link } from "react-router-dom";

const EpisodesList = ({ showData }) => {
  const [currentSeason, setCurrentSeason] = useState(2);

  return (
    <div>
      <h3>Seasons</h3>
      <div>
        {showData?._embedded.seasons.map(season => (
          <button
            key={season.id}
            onClick={() => setCurrentSeason(season.number)}
          >
            S{season.number}
          </button>
        ))}
      </div>
      <h3>episodes</h3>
      <ul>
        {showData?._embedded.episodes.map(episode => {
          if (episode.season === currentSeason)
            return (
              <li key={episode.id}>
                <Link
                  to={`/season/${episode.season}/episode/${episode.number}`}
                >
                  {episode.name}
                </Link>
              </li>
            );
        })}
      </ul>
    </div>
  );
};

export default EpisodesList;
