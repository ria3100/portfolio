import React from 'react'

import {
  // TodoList,
  Main,
  Footer,
  Navigation,
  About,
  BlogCategories,
  FromSocial,
  Contact,
  SourceCode,
} from '../organisms'

export default () => {
  return (
    <div className="App">
      <Navigation />
      <Main />
      <BlogCategories />
      <About />
      <FromSocial />
      <Contact />
      <SourceCode />
      {/* <TodoList /> */}
      <Footer />
    </div>
  )
}
