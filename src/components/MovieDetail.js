import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Hero from "./Hero";

function MovieDetail() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
  const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=061b47a00d8118311aac347c3ce3e5bd&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovieDetails(data);
        setIsLoading(false);
      });
  }, [id]);
  return (
    <>
      <Hero
        text={!isLoading ? movieDetails.original_title : "... loading 🍿"}
        backdrop={backdropUrl}
      />

      <div className="container my-5">
        <div className="row">
          <div className="col-md-3">
            <img
              src={movieDetails.poster_path ? posterPath : "/not-found.png"}
              alt="movie poster"
              className="img-fluid shadow rounded"
            />
          </div>
          <div className="col-md-9">
            <p className="movieDetail"> English title: {movieDetails.title}</p>
            <p className="lead">Overview: {movieDetails.overview}</p>
            {movieDetails.genres && movieDetails.genres.length > 0 && (
              <p className="movieDetail">
                Genres: {movieDetails.genres[0].name}
              </p>
            )}
            {movieDetails.vote_average > 0 && (
              <p className="movieDetail">
                Ranking: {movieDetails.vote_average} / 10
              </p>
            )}
            {movieDetails.release_date && (
              <p className="movieDetail">
                Release date: {movieDetails.release_date}{" "}
              </p>
            )}
            {movieDetails.runtime > 0 && (
              <p className="movieDetail">
                Duration: {movieDetails.runtime} minuts
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetail;
