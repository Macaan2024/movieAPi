import Header from './components/Header';
import MovieList from './components/MovieList';
import React, { useState, useEffect } from 'react';
import Search from './components/Search';

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  // Function to fetch movies data
  const DisplayMovies = async () => {
    if (search === '') {
      setMovies([]);  // Optional: Clear the movie list when there's no search term.
      return;
    }

    const url = `http://www.omdbapi.com/?s=${search}&apikey=8c9ec521`;
    const response = await fetch(url);
    const responseToJson = await response.json();

    console.log(responseToJson);

    // Check if the response contains movies and set them to state
    if (responseToJson.Search) {
      setMovies(responseToJson.Search); // Set the movies state with the fetched data
    } else {
      setMovies([]); // Optional: Handle case when no movies found
    }
  };

  // useEffect to call DisplayMovies whenever the search term changes
  useEffect(() => {
    if (search.trim()) {
      DisplayMovies();
    }
  }, [search]); // Run the effect when the search state changes

  return (
    <div className="App">
      <Header />
      <Search search={search} setSearch={setSearch} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
