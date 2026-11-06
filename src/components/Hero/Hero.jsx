import { useState, useEffect, useCallback, useRef } from 'react'
import PropTypes from 'prop-types'

/**
 * Hero — Sección destacada con carrusel dinámico de películas
 * Rotación automática cada 4s con transición fade de 500ms
 * Precarga de la siguiente imagen + skeleton de carga
 * Pausa automática al interactuar manualmente
 */

const CAROUSEL_INTERVAL = 4000  // 4 segundos
const FADE_DURATION = 500        // 500ms de transición
const PRELOAD_MARGIN = 1         // Precargar la imagen 1 slide antes

function Hero({
  movies,
  currentIndex,
  onSelect,
  onNext,
  onPrev,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
}) {
  const [loaded, setLoaded] = useState(false)        // Imagen actual cargada
  const [isPaused, setIsPaused] = useState(false)    // Pausado por interacción
  const [skeletonVisible, setSkeletonVisible] = useState(false)
  const prevIndexRef = useRef(null)
  const pauseTimerRef = useRef(null)
  const fadeTimerRef = useRef(null)

  const movie = movies[currentIndex] || movies[0]

  // Precarga la imagen del próximo slide
  const nextIndex = (currentIndex + 1) % movies.length
  const nextMovie = movies[nextIndex]

  useEffect(() => {
    if (nextMovie?.backdrop) {
      const img = new Image()
      img.src = nextMovie.backdrop
    }
  }, [currentIndex, movies, nextMovie])

  // Controlar fade-in al cambiar de slide
  useEffect(() => {
    // Mostrar skeleton en cambio de slide
    if (prevIndexRef.current !== null && prevIndexRef.current !== currentIndex) {
      setSkeletonVisible(true)
      setLoaded(false)

      // Esperar a que el fondo se cargue
      if (movie?.backdrop) {
        const img = new Image()
        img.onload = () => {
          // Pequeño delay para que el fade-out del anterior sea visible
          fadeTimerRef.current = setTimeout(() => {
            setLoaded(true)
            fadeTimerRef.current = setTimeout(() => {
              setSkeletonVisible(false)
            }, FADE_DURATION)
          }, 100)
        }
        img.onerror = () => {
          setLoaded(true)
          fadeTimerRef.current = setTimeout(() => {
            setSkeletonVisible(false)
          }, FADE_DURATION)
        }
        img.src = movie.backdrop
      } else {
        setLoaded(true)
        setSkeletonVisible(false)
      }
    }

    prevIndexRef.current = currentIndex
  }, [currentIndex, movie])

  // Resetear el timer de pausa cada vez que cambia el índice
  useEffect(() => {
    prevIndexRef.current = currentIndex
  }, [currentIndex])

  // Activar pausa temporal
  const activatePause = useCallback(() => {
    setIsPaused(true)
    if (pauseTimerRef.current) {
      clearTimeout(pauseTimerRef.current)
    }
    pauseTimerRef.current = setTimeout(() => {
      setIsPaused(false)
    }, CAROUSEL_INTERVAL)
  }, [])

  // Handlers de interacción que activan pausa
  const handleNext = useCallback(() => {
    activatePause()
    onNext()
  }, [activatePause, onNext])

  const handlePrev = useCallback(() => {
    activatePause()
    onPrev()
  }, [activatePause, onPrev])

  const handleIndicatorClick = useCallback((index) => {
    activatePause()
    const event = new CustomEvent('heroNavigate', { detail: index })
    window.dispatchEvent(event)
  }, [activatePause])

  const handleSelect = useCallback(() => {
    activatePause()
    onSelect(movie)
  }, [activatePause, onSelect, movie])

  return (
    <section
      className="hero"
      id="featured"
      aria-label="Película destacada"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Skeleton Loading Layer */}
      <div
        className={`hero__skeleton ${skeletonVisible ? 'hero__skeleton--visible' : ''}`}
        aria-hidden="true"
      >
        <div className="hero__skeleton-shimmer" />
      </div>

      {/* Background con transición fade */}
      <div
        className={`hero__background ${loaded ? 'hero__background--loaded' : ''}`}
        style={{ backgroundImage: `url(${movie.backdrop})` }}
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
            <span className="hero__runtime">{movie.runtime}</span>
            <span className="hero__score">
              <svg className="hero__score-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              {movie.score}
            </span>
          </div>

          <div className="hero__genres">
            {movie.genres?.map((genre) => (
              <span key={genre} className="hero__genre-tag">
                {genre}
              </span>
            ))}
          </div>

          <div className="hero__actions">
            <button
              className="hero__btn hero__btn--primary"
              onClick={handleSelect}
            >
              Ver Detalles
            </button>
            {movie.trailer && (
              <a
                href={movie.trailer}
                target="_blank"
                rel="noopener noreferrer"
                className="hero__btn hero__btn--ghost"
              >
                Trailer
              </a>
            )}
          </div>

          {/* Slide Indicators */}
          {movies.length > 1 && (
            <div className="hero__indicators" role="tablist" aria-label="Selección de película">
              {movies.map((_, index) => (
                <button
                  key={index}
                  className={`hero__indicator${index === currentIndex ? ' hero__indicator--active' : ''}`}
                  onClick={() => handleIndicatorClick(index)}
                  role="tab"
                  aria-selected={index === currentIndex}
                  aria-label={`Película ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Navigation Arrows — grouped bottom right */}
          {movies.length > 1 && (
            <div className="hero__nav-group">
              <button
                className="hero__nav hero__nav--prev"
                onClick={handlePrev}
                aria-label="Película anterior"
              >
                ‹
              </button>
              <button
                className="hero__nav hero__nav--next"
                onClick={handleNext}
                aria-label="Siguiente película"
              >
                ›
              </button>
            </div>
          )}

          {/* Status: paused indicator */}
          {isPaused && (
            <span className="hero__pause-indicator" aria-live="polite">
              Pausado
            </span>
          )}
        </div>
      </div>
    </section>
  )
}

Hero.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      backdrop: PropTypes.string.isRequired,
      synopsis: PropTypes.string.isRequired,
      ageRating: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
      runtime: PropTypes.string,
      genres: PropTypes.arrayOf(PropTypes.string),
      trailer: PropTypes.string,
    })
  ).isRequired,
  currentIndex: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  onTouchStart: PropTypes.func,
  onTouchMove: PropTypes.func,
  onTouchEnd: PropTypes.func,
}

export default Hero
