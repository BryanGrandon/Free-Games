import { useEffect, useState } from 'react'
import { URL_GAME } from '../../services/constants/api'
import { getApiInfo } from '../../services/getApi'
import ItemListInfo from '../ui/item-list-info'
import { MODAL_DEFAULT } from '../../services/constants/data'

type Modal_Game = {
  id: number
}

const ModalGame = ({ id }: Modal_Game) => {
  const [dataGame, setDataGame] = useState(MODAL_DEFAULT)

  const getGames = async (id: number) => {
    const data = await getApiInfo(URL_GAME + `?id=${id}`)
    console.log(URL_GAME + `?id=${id}`)
    if (data) setDataGame(data)
  }

  useEffect(() => {
    getGames(id)
  }, [id])

  const { title, genre, short_description, publisher, thumbnail, developer, game_url, release_date, minimum_system_requirements } = dataGame

  const object = minimum_system_requirements ? Object.entries(minimum_system_requirements) : null

  const Requirements = () => {
    return (
      <section className='grid gap-4'>
        <h3 className='font-force text-xl'>Minimum system requirements</h3>
        <section className='flex flex-col gap-2'>
          {object?.map((e, i) => (
            <div key={i} className='grid gap-4 grid-cols-[7rem_auto]'>
              <p className=' font-bold capitalize'>{[e[0]]}:</p>
              <p>{[e[1]]}</p>
            </div>
          ))}
        </section>
      </section>
    )
  }

  return (
    <article className='flex flex-col gap-4 overflow-auto max-h-[90vh]'>
      <section className='flex flex-col gap-6 md:flex-row relative'>
        <img src={thumbnail} alt={`${title} img`} className='rounded-2xl' />
        <section className='flex flex-col gap-2'>
          <h2 className='font-force text-2xl'>{title}</h2>
          <ul className='flex flex-col gap-1'>
            <ItemListInfo description='Genre' text={genre} />
            <ItemListInfo description='Release data' text={release_date} />
            <ItemListInfo description='Publisher' text={publisher} />
            <ItemListInfo description='Developer' text={developer} />
            <li className='font-bold capitalize'>
              website:{' '}
              <a href={game_url} className='font-normal text-primary hover:text-secondary underline' target='__blank'>
                go to the game website
              </a>
            </li>
          </ul>
        </section>
      </section>
      <section className='grid gap-4'>
        <h3 className='font-force text-xl'>Short Description</h3>
        <p className='max-w-[800px]'>{short_description}</p>
      </section>

      {object ? <Requirements /> : null}
    </article>
  )
}

export default ModalGame
