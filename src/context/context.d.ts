type Options = {
  get: {
    s: string
  }
  update: {
    s: string
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
