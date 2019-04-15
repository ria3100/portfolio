import React from 'react'

import {
  // TodoList,
  Main,
  Footer,
  Navigation,
  About,
  BlogCategories,
  Skils,
  Social,
  SourceCode,
} from '../organisms'

export default () => {
  return (
    <div className="App">
      <Navigation />
      <Main />
      <BlogCategories />
      <About />
      <Skils />
      <Social />
      <SourceCode />
      {/* <TodoList /> */}
      <Footer />
    </div>
  )
}
