import { IGithub } from '../ui/icons'

const Header = () => {
  return (
    <header className='flex flex-col gap-8 p-4 overlay bg-[url(https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center text-white'>
      <nav className='flex justify-between items-center relative max-width w-full'>
        <a href='https://www.freetogame.com/api-doc' target='__black' className='hover:text-primary active:scale-95'>
          Free-To-Game API
        </a>
        <a href='#' target='__black' className='flex gap-2 items-center rounded-lg bg-secondary px-2 py-1 active:scale-95 shadow-xl'>
          <IGithub />
          Github
        </a>
      </nav>
      <article className='relative flex flex-col justify-center items-center gap-6 min-h-60 max-width bg-[url(${url})]'>
        <h1 className='text-5xl text-primary text-center font-force-title text-shadow-2xl'>Free Games</h1>
        <p className='text-xl'>Here you can find a variety of free games that may surprise you.</p>
      </article>
    </header>
  )
}

export default Header
