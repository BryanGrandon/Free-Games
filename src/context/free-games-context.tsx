import React, { useState, JSX, useEffect } from 'react'
import { Free_Games_Type } from './context'
import { INFO_DEFAULT, QUANTITY_OF_CARDS } from '../services/constants/data'
import { URL_API, URL_POPULARITY } from '../services/constants/api'
import { getApiInfo } from '../services/getApi'

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

  const [games, setGames] = useState([])
  const [limitGames, setLimitGames] = useState([INFO_DEFAULT])
  const [popularGames, setPopularGames] = useState([INFO_DEFAULT])
  const [offset, setOffset] = useState(0)

  const GetAllGames = async () => {
    const data = await getApiInfo(URL_API)
    if (data) {
      setGames(data)
      setLimitGames(data.slice(offset, offset + QUANTITY_OF_CARDS))
      setOffset(offset + QUANTITY_OF_CARDS)
    }
  }
  const getPopularGames = async () => {
    const data = await getApiInfo(URL_POPULARITY)
    if (data) setPopularGames(data.slice(0, 5))
  }

  const handlerClickLimitGames = () => {
    const moreGames = games.splice(offset, offset + QUANTITY_OF_CARDS)
    setLimitGames([...limitGames, ...moreGames])
    setOffset(offset + QUANTITY_OF_CARDS)
  }

  useEffect(() => {
    GetAllGames()
    getPopularGames()
  }, [])

  const options = {
    get: {
      popularGames: popularGames,
      limitGames: limitGames,
    },
    update: {
      limitGames: handlerClickLimitGames,
    },
  }

  return <FreeGamesContext.Provider value={{ modal, options }}>{children}</FreeGamesContext.Provider>
}

export { FreeGamesContext }
export default FreeGamesProvider
