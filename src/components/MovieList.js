import React from 'react'

const MovieList = (props) => {

    return ( 
        <>
            {props.movies.map((movie, index) => {
                return (  // Add 'return' here to correctly return the JSX
                    <div key={index}>
                        <img src={movie.Poster} alt={movie.Title} />
                        <h3>{movie.Title}</h3> {/* Optionally display the movie title */}
                    </div>
                );
            })}
        </>
    );
};

export default MovieList;
