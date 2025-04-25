import { JSX } from 'react'
import { IClose } from '../ui/icons'
import { useHookContext } from '../../hooks/hook-context'

type Modal = {
  content: JSX.Element
}

const Modal = ({ content }: Modal) => {
  const { modal } = useHookContext()

  const handlerClickClose = () => modal.modify.open(false)
  const closeModal = (e: React.MouseEvent<HTMLElement, MouseEvent>) => ((e.target as HTMLElement).id.includes('modal') ? handlerClickClose() : null)

  return (
    <article id='modal' onClick={(e) => closeModal(e)} className='fixed w-full h-full z-10 bg-[#000000a9] backdrop-blur-sm flex items-center justify-center max-h-screen'>
      <section className=' min-w-1/2  relative border-secondary border-2 border-solid rounded-2xl bg-[#000000de] shadow shadow-black p-6 pt-9'>
        <button onClick={handlerClickClose} aria-label='Close Modal' className='absolute top-2 right-2 text-xl cursor-pointer'>
          <IClose />
        </button>
        {content}
      </section>
    </article>
  )
}

export default Modal
