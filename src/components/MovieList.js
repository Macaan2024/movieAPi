import React from "react";
import ViewMovie from "./ViewMovie";

const MovieList = ({ movies, selectedMovie, setSelectedMovie }) => {
  const handleMovieSelected = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <>
      {selectedMovie ? (
        <ViewMovie movie={selectedMovie} />
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-4">
          {movies.map((movie, index) => (
            <div
              key={index}
              className="movie-item cursor-pointer"
              onClick={() => handleMovieSelected(movie)} // Handle movie click
            >
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="w-full h-auto object-cover"
              />
              <h3 className="text-center mt-2">{movie.Title}</h3>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MovieList;
