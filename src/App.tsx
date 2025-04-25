import Header from './components/layout/header'
import Main from './components/layout/main'
import Modal from './components/layout/modal'
import { useHookContext } from './hooks/hook-context'

function App() {
  const { modal } = useHookContext()
  const contentModal = modal.get.content

  return (
    <>
      {modal.get.open ? <Modal content={contentModal} /> : null}
      <Header />
      <Main />
    </>
  )
}

export default App
