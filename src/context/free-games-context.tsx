import React, { useState, JSX } from 'react'
import { Free_Games_Type } from './context'

const FreeGamesContext = React.createContext<Free_Games_Type>({} as Free_Games_Type)

type Provider_Props = {
  children: React.ReactNode
}

const FreeGamesProvider = ({ children }: Provider_Props) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState(<p>sss</p>)

  const modal = {
    get: {
      open: modalOpen,
      content: modalContent,
    },
    modify: {
      open: (boolean: boolean) => setModalOpen(boolean),
      content: (content: JSX.Element) => setModalContent(content),
    },
  }

  const options = {
    get: {
      s: 's',
    },
    update: {
      s: '',
    },
  }
  return <FreeGamesContext.Provider value={{ modal, options }}>{children}</FreeGamesContext.Provider>
}

export { FreeGamesContext }
export default FreeGamesProvider
