import React from 'react'

import {
  Main,
  Footer,
  Navigation,
  About,
  BlogList,
} from '../organisms'

export default ({ listData }) => (
  <section className="wrapper">
    <Navigation />
    <Main />
    <BlogList listData={listData} />
    {/* <About /> */}
  <Footer />
  </section>
)
