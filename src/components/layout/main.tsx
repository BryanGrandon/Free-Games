import { useEffect, useState } from 'react'
import { URL_API, URL_POPULARITY } from '../../services/constants/api'
import { getApiInfo } from '../../services/getApi'
import Title from '../ui/title'
import GameCard from '../ui/game-card'
import { INFO_DEFAULT, QUANTITY_OF_CARDS } from '../../services/constants/data'

const Main = () => {
  const [games, setGames] = useState([])
  const [limitGames, setLimitGames] = useState([INFO_DEFAULT])
  const [offset, setOffset] = useState(0)

  const GetAllGames = async () => {
    const data = await getApiInfo(URL_API)
    if (data) {
      setGames(data)
      setLimitGames(data.slice(offset, offset + QUANTITY_OF_CARDS))
      setOffset(offset + QUANTITY_OF_CARDS)
    }
  }

  const [popularGames, setPopularGames] = useState([INFO_DEFAULT])

  const getPopularGames = async () => {
    const data = await getApiInfo(URL_POPULARITY)
    if (data) setPopularGames(data.slice(0, 5))
  }

  useEffect(() => {
    GetAllGames()
    getPopularGames()
  }, [])

  const handlerClick = () => {
    const moreGames = games.splice(offset, offset + QUANTITY_OF_CARDS)
    setLimitGames([...limitGames, ...moreGames])
    setOffset(offset + QUANTITY_OF_CARDS)
  }

  return (
    <main className='p-4 max-width'>
      <article className='flex flex-col gap-10 py-10'>
        <Title text='popularity games' />

        <article className='grid grid-cols-[repeat(auto-fill,_minmax(16rem,_1fr))] gap-4'>
          {popularGames.map((e) => (
            <GameCard key={e.id} img={e.thumbnail} title={e.title} platform={e.platform} release_date={e.release_date} genre={e.genre} />
          ))}
        </article>
      </article>

      <article className='flex flex-col gap-10 py-10'>
        <Title text='Games List' />
        <article>Filter</article>
        <article className='grid grid-cols-[repeat(auto-fill,_minmax(16rem,_1fr))] gap-4'>
          {limitGames.map((e) => (
            <GameCard key={e.id} img={e.thumbnail} title={e.title} platform={e.platform} release_date={e.release_date} genre={e.genre} />
          ))}
        </article>
        <button onClick={handlerClick} className='bg-secondary rounded-md m-auto px-6 py-1 text-lg cursor-pointer shadow-md shadow-gray-900 active:scale-95'>
          More games
        </button>
      </article>
    </main>
  )
}

export default Main
