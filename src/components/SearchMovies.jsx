import React, { useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

function SearchMovies() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  
  const searchMovies = async () => {
     const apiKey = "c2062f5b";
    const  url =`https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`
    try {
      const response = await axios.get(url);

      if (response.data.Response === "True") {
        setMovies(response.data.Search || []);
        setError(null);
      } else {
        setError(response.data.Error);
        setMovies([]);
      }
    } catch (error) {
      setError("Error fetching data. Please try again later.");
      setMovies([]);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
      />
      <button onClick={searchMovies}>Search</button>
      {error && <div>Error: {error}</div>}
      <div>
        {movies.map((movie) => (
          // eslint-disable-next-line react/jsx-no-undef
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default SearchMovies;

