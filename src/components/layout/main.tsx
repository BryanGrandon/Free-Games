import { useEffect, useState } from 'react'
import { URL_API } from '../../services/constants/api'
import { getApiInfo } from '../../services/getApi'
import Title from '../ui/title'

const Main = () => {
  const [games, setGames] = useState([
    {
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
    },
  ])

  const getInfoApi = async (url: string) => {
    const data = await getApiInfo(url)
    if (data) setGames(data)
  }

  useEffect(() => {
    getInfoApi(URL_API)
  }, [])

  return (
    <main className='p-4'>
      <article className='flex flex-col gap-10 py-10'>
        <Title text='popularity games' />

        <article>
          <p></p>
        </article>
      </article>

      <article className='flex flex-col gap-10 py-10'>
        <Title text='Games List' />
        <article>Filter</article>
        <article className='grid grid-cols-[repeat(auto-fill,_minmax(15rem,_1fr))] gap-4 rounded-2xl'>
          {games.map((e) => (
            <section key={e.id} className='test overflow-hidden rounded-xl'>
              <img src={e.thumbnail} alt='' className='w-full' />
              <h3>{e.title}</h3>
              <p>{e.short_description}</p>
            </section>
          ))}
        </article>
      </article>
    </main>
  )
}

export default Main
