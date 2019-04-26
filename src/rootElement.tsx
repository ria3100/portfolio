import React, { useState, useEffect } from 'react'

// import AppContext from './contexts'
// import categories from './contexts/categories'

export default ({ children }: any) => {
  // const [scroll, setScroll] = useState(0)

  // const scrollTop = () => {
  //   setScroll(Math.max(
  //     window.pageYOffset,
  //     document.documentElement.scrollTop,
  //     document.body.scrollTop
  //   ))
  // }

  // useEffect(() => {
  //   document.addEventListener('scroll', scrollTop)
  // })

  // const provider = {
  //   scroll, setScroll,
  //   categories
  // }

  return (
    // <AppContext.Provider value={provider}>
      <div id="root">
        {children}
      </div>
    // </AppContext.Provider>
  )
}
