import React from "react";
import { useState } from "react";
import "./styles.css";

var movieDictionary = {
  scifi: [
    { name: "Interstellar", rating: "8.8" },
    { name: "Inception", rating: "8.7" },
    { name: "The Matrix", rating: "8.1" },
    { name: "Back to the Future", rating: "7.8" }
  ],
  thriller: [
    { name: "Parasite", rating: "8.6" },
    { name: "The Prestige", rating: "8.4" },
    { name: "Se7en", rating: "8.7" },
    { name: "Joker", rating: "8.5" }
  ],
  mystery: [
    { name: "Get Out", rating: "8.4" },
    { name: "Shutter Island", rating: "8.2" },
    { name: "Andhadhun", rating: "8.6" },
    { name: "Drishyam", rating: "8.3" }
  ]
};

var allmovieList = Object.keys(movieDictionary);

export default function App() {
  const [movieSelected, setMovieSelected] = useState("scifi");
  var movieList = movieDictionary[movieSelected];
  function brandClickHandler(movies) {
    setMovieSelected(movies);
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ letterSpacing: "0.5px" }}>Top IMDB Rating Movies</h1>
      <p style={{ letterSpacing: "1px", fontWeight: "700" }}>
        Check out movies based on IMDB Ratings
      </p>
      <div>
        {allmovieList.map((movies) => (
          <button
            onClick={() => brandClickHandler(movies)}
            style={{
              outline: "none",
              padding: "0.5rem 1rem",
              margin: "1rem",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            {movies}
          </button>
        ))}
      </div>
      <hr
        style={{
          color: "#80808054",
          margin: "2rem"
        }}
      ></hr>
      <div
        style={{
          textAlign: "center"
        }}
      >
        <ul
          style={{
            margin: "auto",
            padding: "0"
          }}
        >
          {movieList.map((movie) => (
            <li
              key={(movie.name, movie.rating)}
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: "10px",
                padding: "1rem",
                listStyle: "none",
                border: "1px solid black",
                borderRadius: "10px",
                width: "40%"
              }}
            >
              <div style={{ fontSize: "larger" }}> {movie.name} </div>
              <div style={{ fontSize: "medium" }}> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
