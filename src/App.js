import { useEffect, useState } from "react";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
import "./App.css";

// 9e358063

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=9e358063";

const movie1 = {
  Title: "John Wick: Kill Count",
  Year: "2017",
  imdbID: "tt7161942",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMjcyM2UzMGQtYzkzYy00MGQ3LWE0MTAtNjIzNzk5MTBhNGQ3XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg",
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("John Wick");
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="Search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
