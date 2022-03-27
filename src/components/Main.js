import React from "react";
import Row from "./Row";
import requests from "./utils/request";

const Main = () => {
  return (
    <div>
      <Row
        title="Top 10 in Nigeria Today"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
};

export default Main;
