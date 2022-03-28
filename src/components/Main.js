import React from "react";
import Banner from "./banner/Banner";
import Row from "./row/Row";
import requests from "./utils/request";

const Main = () => {
  return (
    <div>
      <Banner />
      <Row
        isFirstRow
        title="Top 10 in Nigeria Today"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Horror Movies" fetchUrl={requests.fetcHorrorMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRated} />
    </div>
  );
};

export default Main;
