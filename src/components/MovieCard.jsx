import React from "react";

function MovieCard ({ movie }) {
  return (
    <div>
      <h3>{movie.Title}</h3>
      <p>Year: {movie.Year}</p>
      <img src={movie.Poster} alt={movie.Title} />
    </div>
  );
};

export default MovieCard;
