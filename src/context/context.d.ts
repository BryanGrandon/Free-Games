type Card_Default = {
  id: number
  title: string
  thumbnail: string
  short_description: string
  game_url: string
  genre: string
  platform: string
  publisher: string
  developer: string
  release_date: string
  freetogame_profile_url: string
}

type Options = {
  get: {
    limitGames: Card_Default[]
    popularGames: Card_Default[]
    allGames: number
  }
  update: {
    limitGames: () => void
    filterCategory: (category: string) => void
  }
}

export type Modal = {
  get: {
    open: boolean
    content: JSX.Element
  }
  modify: {
    open: (boolean: boolean) => void
    content: (content: JSX.Element) => void
  }
}

export type Free_Games_Type = {
  modal: Modal
  options: Options
}
