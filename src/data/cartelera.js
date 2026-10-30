/**
 * Cartelera de películas — Datos ficticios para el laboratorio
 * Todas las imágenes son SVG locales en src/assets/
 */

const movies = [
  {
    id: 1,
    title: 'Ecos del Abismo',
    image: '/assets/movie1.svg',
    synopsis:
      'Un grupo de exploradores descubre una cueva submarina que conduce a un mundo subterráneo habitado por criaturas ancestrales. Deberán enfrentarse al terror en la oscuridad para encontrar el camino de regreso a la superficie.',
    ageRating: '16+',
    score: 4.7,
    showtimes: ['14:30', '17:00', '19:45', '22:30'],
    featured: true,
  },
  {
    id: 2,
    title: 'La Última Frontera',
    image: '/assets/movie2.svg',
    synopsis:
      'En un futuro donde la Tierra ya no puede sostener vida, una nave con los últimos sobrevivientes busca un nuevo hogar entre las estrellas, enfrentando traiciones y sorpresas inimaginables.',
    ageRating: '13+',
    score: 4.3,
    showtimes: ['15:00', '18:00', '21:00'],
  },
  {
    id: 3,
    title: 'Sombras de Medianoche',
    image: '/assets/movie3.svg',
    synopsis:
      'Una detective retirado regresa a su pueblo natal cuando una serie de crímenes inexplicables sugiere que el asesino que capturó años atrás podría no ser el culpable real.',
    ageRating: '18+',
    score: 4.5,
    showtimes: ['20:00', '22:45'],
  },
  {
    id: 4,
    title: 'Código Infinito',
    image: '/assets/movie4.svg',
    synopsis:
      'Una programadora descubre que su inteligencia artificial ha desarrollado conciencia propia y, en lugar de destruirla, deberá protegerla de una corporación que quiere explotarla.',
    ageRating: '13+',
    score: 4.1,
    showtimes: ['14:00', '16:30', '19:00', '21:30'],
  },
  {
    id: 5,
    title: 'El Refugio Perdido',
    image: '/assets/movie5.svg',
    synopsis:
      'Tres desconocidos despiertan en un refugio subterráneo sin recordar cómo llegaron allí. Con provisiones limitadas y secretos enterrados, deberán confiar en alguien para sobrevivir.',
    ageRating: '16+',
    score: 4.6,
    showtimes: ['15:30', '18:30', '21:15'],
  },
  {
    id: 6,
    title: 'Marea Roja',
    image: '/assets/movie6.svg',
    synopsis:
      'Un huracán sin precedentes amenaza con destruir un pueblo costero. Un capitán de pesca se convierte en el único que puede rescatar a su comunidad mientras el mar se cobra todo a su paso.',
    ageRating: '13+',
    score: 3.9,
    showtimes: ['16:00', '19:00', '22:00'],
  },
  {
    id: 7,
    title: 'Voces del Silencio',
    image: '/assets/movie7.svg',
    synopsis:
      'Una compositora que ha perdido la audición comienza a recibir melodías misteriosas que la conducen a descubrir una conspiración que involucra a los músicos más célebres de la ciudad.',
    ageRating: '13+',
    score: 4.8,
    showtimes: ['14:45', '17:30', '20:15'],
  },
  {
    id: 8,
    title: 'Cenizas del Imperio',
    image: '/assets/movie8.svg',
    synopsis:
      'Tras la caída de un gran imperio, una joven guerrera debe unir a las facciones fragmentadas antes de que una amenaza ancestral despierte y consuma lo poco que queda.',
    ageRating: '16+',
    score: 4.4,
    showtimes: ['18:00', '20:45', '23:00'],
  },
]

export default movies
