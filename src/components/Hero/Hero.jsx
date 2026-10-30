import PropTypes from 'prop-types'

/**
 * Hero — Sección destacada de la película principal
 * Muestra la película marcada como featured en los datos
 */
function Hero({ movie }) {
  if (!movie) return null

  return (
    <section
      className="hero"
      id="featured"
      aria-label="Película destacada"
    >
      <div
        className="hero__background"
        style={{ backgroundImage: `url(${movie.image})` }}
        aria-hidden="true"
      />
      <div className="hero__overlay">
        <div className="hero__container">
          <span className="hero__badge">
            <svg className="hero__badge-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            Destacada
          </span>
          <h2 className="hero__title">{movie.title}</h2>
          <p className="hero__synopsis">{movie.synopsis}</p>

          <div className="hero__meta">
            <span className="hero__age-badge">{movie.ageRating}</span>
            <span className="hero__score" aria-label={`Calificación: ${movie.score} de 5`}>
              <svg className="hero__score-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              {movie.score}
            </span>
          </div>

          <div className="hero__showtimes">
            <span className="hero__showtimes-label">Horarios:</span>
            <div className="hero__showtimes-list">
              {movie.showtimes.map((time) => (
                <span key={time} className="hero__showtime-chip">
                  {time}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Hero.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    synopsis: PropTypes.string.isRequired,
    ageRating: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    showtimes: PropTypes.arrayOf(PropTypes.string).isRequired,
    featured: PropTypes.bool,
  }),
}

Hero.defaultProps = {
  movie: null,
}

export default Hero
