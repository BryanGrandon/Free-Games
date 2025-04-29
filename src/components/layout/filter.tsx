import { useHookContext } from '../../hooks/hook-context'
import { LIST_OF_CATEGORIES } from '../../services/constants/data'

const Filter = () => {
  const { options } = useHookContext()
  const { filterCategory } = options.update

  const handlerClick = (e: string) => filterCategory(e)

  return (
    <article className='flex flex-wrap gap-1 justify-center'>
      {LIST_OF_CATEGORIES.map((e) => (
        <button key={e} onClick={() => handlerClick(e)} className='bg-secondary rounded-md  px-3 py-1 cursor-pointer shadow-md shadow-gray-900 active:scale-95'>
          {e}
        </button>
      ))}
    </article>
  )
}

export default Filter
