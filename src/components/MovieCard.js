import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const detailUrl = `/movies/${movie.id}`;
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 my-4">
      <div className="card">
        <img
          src={Boolean(movie.poster_path) ? posterUrl : "/not-found.png"}
          class="card-img-top"
          alt={movie.original_title}
        />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <Link to={detailUrl} className="btn btn-primary">
            show details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
