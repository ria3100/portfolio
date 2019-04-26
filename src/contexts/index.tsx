// https://programmagick.com/blog?slug=react_context_api_typescript

import { createContext } from 'react'

const defaultState = {
  scroll: 0,
  setScroll: (n: number) => {},
  categories: {},
}
const Context = createContext(defaultState)

export default Context
