import { useContext } from 'react'
import { FreeGamesContext } from '../context/free-games-context'

export const useHookContext = () => {
  return useContext(FreeGamesContext)
}
