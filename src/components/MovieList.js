import React from "react";

const MovieList = (props) => {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-4">
        {props.movies.map((movie, index) => {
          return (
            <div key={index} className="movie-item">
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="w-full h-auto object-cover"
              />
              <h3 className="text-center mt-2">{movie.Title}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MovieList;
