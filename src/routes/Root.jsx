import "../App.css";
import { fetchTrendingMovies } from "../clients/MovieDBClient";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import MovieList from "../components/showcase/MovieList";
import Body from "../components/Body";

function Root() {
  const [trendingMovies, setTrendingData] = useState({ results: [] });
  const ref = useRef(true);

  useEffect(() => {
    if (ref.current) {
      const loadData = async () => {
        const result = await fetchTrendingMovies();
        setTrendingData(result);
      };
      ref.current = false;

      loadData();
    }
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Body>
        <MovieList movies={trendingMovies.results} />
      </Body>
    </div>
  );
}

export default Root;
