import Header from "./components/Header";
import MovieList from "./components/MovieList";
import React, { useState, useEffect } from "react";
import Search from "./components/Search";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("Batman");

  const DisplayMovies = async () => {
    if (search.trim() === "") {
      setMovies([]);
      return;
    }

    const url = `http://www.omdbapi.com/?s=${search}&apikey=8c9ec521&page=10`;
    const response = await fetch(url);
    const responseToJson = await response.json();
    console.log(responseToJson);

    if (responseToJson.Response === "True") {
      setMovies(responseToJson.Search);
    } else {
      setMovies([]);
    }
  };

  useEffect(() => {
    DisplayMovies();
  }, [search]);

  return (
    <div className="App">
      <Header />
      <Search search={search} setSearch={setSearch} />
      <div className="2xl bg-blue-700 mt-10">
        <div className="sm:container sm:mx-auto mx-2 bg-green-700">
          <MovieList movies={movies} />
        </div>
      </div>
    </div>
  );
}
export default App;
