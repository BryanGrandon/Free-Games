function App() {
  // https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
  return (
    <>
      <header className='flex flex-col gap-8 p-4 overlay bg-[url(https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover '>
        <nav className='flex justify-between relative'>
          <p>Free Games</p>
          <button>Github</button>
        </nav>
        <article className='relative flex flex-col flex-wrap gap-10 items-center justify-center md:flex-row'>
          <section className='flex flex-col gap-6 w-2/4'>
            <h1 className='text-4xl text-primary'>Free Games</h1>
            <p className='text-lg'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis sit, commodi nam
              maiores unde assumenda placeat inventore! Cumque cum vitae consequuntur laborum quia
              tempora soluta similique odit a id. Doloremque!
            </p>
          </section>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Retro_gamepad.svg/768px-Retro_gamepad.svg.png'
            alt='controller retro'
            className='w-1/6'
          />
        </article>
      </header>
    </>
  )
}

export default App
