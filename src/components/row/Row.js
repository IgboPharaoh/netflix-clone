import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "../API/axios";
import "./Row.css";
import movieTrailer from "movie-trailer";

const Row = ({ title, fetchUrl, isFirstRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState();
  const baseURL = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search)
          setTrailerUrl(urlParams.get('v'))
        })
        .catch(console.error("error"));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
          key={movie.id}
          onClick={() => handleClick(movie)}
          className={`row__poster ${isFirstRow && "row__posterLarge"}`}
          src={`${baseURL}${
            isFirstRow ? movie.poster_path : movie.backdrop_path
          }`}
          alt={movie.name}
          />
          ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
