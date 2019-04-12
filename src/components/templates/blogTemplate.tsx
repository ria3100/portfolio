import React from 'react'

import {
  TodoList,
  Footer,
  Navigation,
  BlogCategories,
} from '../organisms'

export default () => {
  return (
    <div className="App">
      <Navigation />
      <BlogCategories />
      <TodoList />
      <Footer />
    </div>
  )
}
