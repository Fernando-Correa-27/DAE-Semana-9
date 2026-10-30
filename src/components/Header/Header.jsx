import PropTypes from 'prop-types'

/**
 * Header — Barra de navegación principal del sitio
 */
function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div class="header__brand">
          <span className="header__logo" aria-hidden="true">&#9654;</span>
          <h1 className="header__title">Cartelera de Cine</h1>
        </div>
        <nav className="header__nav" aria-label="Navegación principal">
          <a href="#featured" className="header__link">
            Destacada
          </a>
          <a href="#movies" className="header__link">
            Cartelera
          </a>
          <a href="#footer" className="header__link">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  /* No props — component is static */
}

export default Header
