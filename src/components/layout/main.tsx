import Title from '../ui/title'
import GameCard from '../ui/game-card'
import { useHookContext } from '../../hooks/hook-context'
import Filter from './filter'

const Main = () => {
  const { options } = useHookContext()
  const { popularGames, limitGames, allGames } = options.get
  const handlerClick = () => options.update.limitGames()

  return (
    <main className='p-4 max-width '>
      <article className='flex flex-col gap-10 py-10'>
        <Title text='popularity games' />

        <article className='grid grid-cols-[repeat(auto-fill,_minmax(16rem,_1fr))] gap-4'>
          {popularGames.map((e) => (
            <GameCard key={e.id} img={e.thumbnail} title={e.title} platform={e.platform} release_date={e.release_date} genre={e.genre} id={e.id} />
          ))}
        </article>
      </article>

      <article className='flex flex-col gap-10 py-10'>
        <Title text='Games List' />
        <Filter />
        <article className='grid grid-cols-[repeat(auto-fill,_minmax(16rem,_1fr))] gap-4'>
          {limitGames?.map((e) => (
            <GameCard key={e.id} img={e.thumbnail} title={e.title} platform={e.platform} release_date={e.release_date} genre={e.genre} id={e.id} />
          ))}
        </article>
        {limitGames.length < allGames ? (
          <button onClick={handlerClick} className='bg-secondary rounded-md m-auto px-6 py-1 text-lg cursor-pointer shadow-md shadow-gray-900 active:scale-95'>
            More games
          </button>
        ) : null}
      </article>
    </main>
  )
}

export default Main
