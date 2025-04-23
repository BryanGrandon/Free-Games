import { useEffect, useState } from 'react'
import { URL_API, URL_POPULARITY } from '../../services/constants/api'
import { getApiInfo } from '../../services/getApi'
import Title from '../ui/title'
import GameCard from '../ui/game-card'

const Main = () => {
  const data = {
    id: 0,
    title: '',
    thumbnail: 'https://media.tenor.com/wpSo-8CrXqUAAAAm/loading-loading-forever.webp',
    short_description: '',
    game_url: '',
    genre: '',
    platform: '',
    publisher: '',
    developer: '',
    release_date: '',
    freetogame_profile_url: '',
  }
  const [, setGames] = useState([])
  const [limitGames, setLimitGames] = useState([data])
  const [offset, setOffset] = useState(0)

  const GetAllGames = async () => {
    const data = await getApiInfo(URL_API)
    if (data) {
      setGames(data)
      setLimitGames(data.slice(offset, offset + 20))
      setOffset(offset + 20)
    }
  }

  const [popularGames, setPopularGames] = useState([data])

  const getPopularGames = async () => {
    const data = await getApiInfo(URL_POPULARITY)
    if (data) setPopularGames(data.slice(0, 5))
    console.log(data)
  }

  useEffect(() => {
    GetAllGames()
    getPopularGames()
  }, [])

  return (
    <main className='p-4'>
      <article className='flex flex-col gap-10 py-10'>
        <Title text='popularity games' />

        <article className='grid grid-cols-[repeat(auto-fill,_minmax(16rem,_1fr))] gap-4 rounded-2xl'>
          {popularGames.map((e) => (
            <GameCard key={e.id} img={e.thumbnail} title={e.title} platform={e.platform} release_date={e.release_date} genre={e.genre} />
          ))}
        </article>
      </article>

      <article className='flex flex-col gap-10 py-10'>
        <Title text='Games List' />
        <article>Filter</article>
        <article className='grid grid-cols-[repeat(auto-fill,_minmax(16rem,_1fr))] gap-4 rounded-2xl'>
          {limitGames.map((e) => (
            <GameCard key={e.id} img={e.thumbnail} title={e.title} platform={e.platform} release_date={e.release_date} genre={e.genre} />
          ))}
        </article>
      </article>
    </main>
  )
}

export default Main
