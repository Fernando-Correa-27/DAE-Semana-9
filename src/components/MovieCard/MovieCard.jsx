import PropTypes from 'prop-types'

/**
 * MovieCard — Tarjeta individual de película
 */
function MovieCard({ movie }) {
  return (
    <article className="movie-card" aria-label={`Película: ${movie.title}`}>
      <div className="movie-card__poster">
        <img
          src={movie.image}
          alt={`Póster de ${movie.title}`}
          loading="lazy"
          className="movie-card__image"
        />
        <span className="movie-card__age-badge">{movie.ageRating}</span>
      </div>

      <div className="movie-card__content">
        <h3 className="movie-card__title">{movie.title}</h3>
        <div className="movie-card__rating">
          <span className="movie-card__stars" aria-hidden="true">&#9733;</span>
          <span className="movie-card__score">{movie.score}</span>
        </div>

        <p className="movie-card__synopsis">{movie.synopsis}</p>

        <div className="movie-card__showtimes">
          <span className="movie-card__showtimes-label">Horarios:</span>
          <div className="movie-card__showtimes-list">
            {movie.showtimes.map((time) => (
              <span key={time} className="movie-card__showtime-chip">
                {time}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    synopsis: PropTypes.string.isRequired,
    ageRating: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    showtimes: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
}

export default MovieCard
