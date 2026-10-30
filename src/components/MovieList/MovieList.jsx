import PropTypes from 'prop-types'
import MovieCard from '../MovieCard/MovieCard'

/**
 * MovieList — Lista de todas las películas (excluye la destacada)
 */
function MovieList({ movies }) {
  if (!movies || movies.length === 0) {
    return (
      <section className="movie-list">
        <p className="movie-list__empty">No hay películas disponibles en este momento.</p>
      </section>
    )
  }

  return (
    <section className="movie-list" id="movies" aria-label="Cartelera de películas">
      <h2 className="movie-list__heading">En cartelera</h2>
      <div className="movie-list__grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  )
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      synopsis: PropTypes.string.isRequired,
      ageRating: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
      showtimes: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
}

export default MovieList
