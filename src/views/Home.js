import React, { useEffect, useState } from "react";
import EpisodesList from "../components/EpisodesList.js";

const Home = () => {
  const [showData, setShowData] = useState(null);

  useEffect(() => {
    const fetchAPI = async () => {
      const resp = await fetch(
        "https://api.tvmaze.com/shows/530?embed[]=episodes&embed[]=seasons"
      );
      const data = await resp.json();
      setShowData(data);
    };
    fetchAPI();
  }, []);

  return (
    <div>
      <h1>seinfeld</h1>
      <img src={showData?.image.original} alt="seinfeld" />
      <h3>Summary</h3>
      <p>{showData?.summary}</p>
      <EpisodesList showData={showData} />
    </div>
  );
};

export default Home;
