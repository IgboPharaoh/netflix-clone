import React, { useEffect, useState } from "react";
import axios from "../API/axios";
import "./Row.css";

const Row = ({ title, fetchUrl, isFirstRow }) => {
  const [movies, setMovies] = useState([]);
  const baseURL = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isFirstRow && 'row__posterLarge'}`}
            src={`${baseURL}${isFirstRow ? movie.poster_path :  movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
