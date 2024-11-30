import React from "react";

// Show details of the selected movie
const ViewMovie = ({ movie }) => {
  return (
    <div className="flex sm:flex-row  sm:gap-4 flex-col sm:justify-start justify-center ">
      <div className="movie-detail">
        <img className="w-full sm:w-auto" src={movie.Poster} alt={movie.Title} />

      </div>
      <div className="flex flex-col">
        <h2>{movie.Title}</h2>
        <p>{movie.Year}</p>
        <p>{movie.Plot}</p>
      </div>
    </div>
  );
};

export default ViewMovie;
