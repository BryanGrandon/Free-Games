import { useEffect, useState } from 'react'
import { OPTIONS, URL_API } from '../../services/constants/api'
import { Get_Api_Info, getApiInfo } from '../../services/getApi'

const Main = () => {
  const [games, setGames] = useState([
    {
      id: 0,
      title: '',
      thumbnail: '',
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

  const getInfoApi = async ({ url, options }: Get_Api_Info) => {
    const data = await getApiInfo({ url, options })
    if (data) setGames(data)
  }

  useEffect(() => {
    getInfoApi({ url: URL_API, options: OPTIONS })
  }, [])

  console.log(games)

  return (
    <main>
      <h2>Main</h2>
      <article className='grid grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))] gap-4 rounded-2xl'>
        {games.map((e) => (
          <section key={e.id} className='test overflow-hidden rounded-xl'>
            <img src={e.thumbnail} alt='' className='w-full' />
            <h3>{e.title}</h3>
            <p>{e.short_description}</p>
          </section>
        ))}
      </article>
    </main>
  )
}

export default Main
