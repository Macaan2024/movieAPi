import Header from "./components/Header";
import MovieList from "./components/MovieList";
import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import ButtonPrevious from "./components/ButtonPrevious";
import ButtonNext from './components/ButtonNext';
import PaginationNumbers from "./components/PaginationNumbers";
import ViewMovie from './components/ViewMovie';
import MovieCategory from './components/MovieCategory';

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("Batman");
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movieCategory, setMovieCategory] = useState("");
 
  const fetchMovies = async () => {
    const url = `http://www.omdbapi.com/?s=${search}&apikey=8c9ec521&page=${currentPage}${movieCategory !== '' ? `&type=${movieCategory}` : ''}`;
    const response = await fetch(url);
    const responseToJson = await response.json();

    if (responseToJson.Response === "True") {
      setMovies(responseToJson.Search);
      setError("");
    } else {
      setMovies([]);
      setError("No Movies Found");
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [search, currentPage, movieCategory]); // Fetch when `search` or `pagination` changes

  const handleHomeCLick = () => {
    setSelectedMovie(null);
    setSearch("batman");
  } 


  return (
    <div className="App"> 
      <Header onHomeClick={handleHomeCLick} />
      {selectedMovie === null && (<Search search={search} setSearch={setSearch} />)}
      <p className="text-center text-red-500">{error}</p>
      <div className="2xl mt-10 mb-12">
        <div className="sm:container sm:mx-auto mx-2 ">
          <MovieCategory setMovieCategory={setMovieCategory} movieCategory={movieCategory}/>
          <MovieList movies={movies} setSelectedMovie={setSelectedMovie} selectedMovie={selectedMovie} />
        </div>
      {selectedMovie === null && (
        <div className="flex justify-center gap-5 items-center mt-4 w-full">
          <ButtonPrevious onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}   />
          <PaginationNumbers setCurrentPage = {setCurrentPage} currentPage={currentPage}  />
          <ButtonNext onClick={() => setCurrentPage(currentPage + 1)} />
        </div>
      )}
        
      </div>
    </div>
  );
}

export default App;
