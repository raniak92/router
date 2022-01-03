import React from "react";
import MovieCard from "./MovieCard";

export default function MovieList({ movie, name, rating }) {
  return (
    <div className="List">
      {movie
        .filter(
          (el) =>
            el.Title.toLowerCase().includes(name.toLowerCase()) &&
            el.Rating >= rating
        )
        .map((el) => (
          <MovieCard movie={el} key={el.id} />
        ))}
    </div>
  );
}
