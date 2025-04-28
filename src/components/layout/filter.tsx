import { useHookContext } from '../../hooks/hook-context'
import { LIST_OF_CATEGORIES } from '../../services/constants/data'

const Filter = () => {
  const { options } = useHookContext()
  const { filterCategory } = options.update

  const handlerClick = (e: string) => {
    filterCategory(e)
    console.log(e)
  }

  return (
    <article>
      <section>
        {LIST_OF_CATEGORIES.map((e) => (
          <button key={e} onClick={() => handlerClick(e)} className='bg-secondary rounded-md m-1 px-6 py-1 text-lg cursor-pointer shadow-md shadow-gray-900 active:scale-95'>
            {e}
          </button>
        ))}
      </section>
    </article>
  )
}

export default Filter
