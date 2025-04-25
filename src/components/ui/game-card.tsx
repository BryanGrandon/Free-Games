import { useHookContext } from '../../hooks/hook-context'
import ModalGame from '../layout/modal-game'
import { IBrowser, IPc } from './icons'

type Game_Card = {
  img: string
  title: string
  platform: string
  release_date: string
  genre: string
  id: number
}

const GameCard = ({ img, title, platform, release_date, genre, id }: Game_Card) => {
  const icon = platform === 'PC (Windows)' ? <IPc className='h-4' /> : <IBrowser className='h-4' />

  const { modal } = useHookContext()

  const handlerClickOpenModal = () => {
    modal.modify.content(<ModalGame id={id} />)
    modal.modify.open(true)
  }

  return (
    <article onClick={handlerClickOpenModal} className='overflow-hidden rounded-xl bg-tertiary  text-white cursor-pointer shadow-md shadow-gray-950  hover:scale-103'>
      <section className='relative'>
        <img src={img} alt={title + 'image'} className='w-full' />
        <span className='glassmorphism absolute top-1 left-1 px-2'>{release_date}</span>
        <span className='block bg-secondary-50 text-white text-sm absolute  top-1 right-1 px-2 py-1 rounded-md shadow-inner shadow-gray-800 border border-solid border-white'>{genre}</span>
      </section>
      <section className='flex items-center justify-between gap-4 py-3 px-6 '>
        <h3 className='font-semibold'>{title}</h3>
        <span>{icon}</span>
      </section>
    </article>
  )
}

export default GameCard
