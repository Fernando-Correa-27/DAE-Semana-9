import { useMemo } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import MovieList from './components/MovieList/MovieList'
import moviesData from './data/cartelera'

import './styles/component-overrides.css'

function App() {
  const featured = useMemo(() => moviesData.find((m) => m.featured) || null, [])
  const list = useMemo(() => moviesData.filter((m) => !m.featured), [])

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <Hero movie={featured} />
        <MovieList movies={list} />
      </main>
      <Footer />
    </div>
  )
}

export default App
