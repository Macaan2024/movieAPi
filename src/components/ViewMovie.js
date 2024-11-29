import React from "react";

// Show details of the selected movie
const ViewMovie = ({ movie }) => {
  return (
    <div className="movie-detail">
      <img src={movie.Poster} alt={movie.Title} />
      <h2>{movie.Title}</h2>
      <p>{movie.Year}</p>
      <p>{movie.Plot}</p>
    </div>
  );
};

export default ViewMovie;
