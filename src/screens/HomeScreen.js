import React from "react";
import Banner from "../Banner";
import "./HomeScreen.css";
import Nav from "../Nav";
import requests from "../Requests";
import Row from "../Row";

function HomeScreen() {
  return (
    <div className="homescreen">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="trending now" fetchUrl={requests.fetchTrending} />
      <Row title="top rated" fetchUrl={requests.fetchTopRated} />
      <Row title="action movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="horror movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="romance movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default HomeScreen;
