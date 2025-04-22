const URL_API = 'https://free-to-play-games-database.p.rapidapi.com/api/games'
const URL_POPULARITY = URL_API + '?sort-by=popularity'

const OPTIONS = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': import.meta.env.API_KEY,
    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
  },
}

export { URL_API, URL_POPULARITY, OPTIONS }
