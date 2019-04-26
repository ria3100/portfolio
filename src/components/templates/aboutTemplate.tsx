import React from 'react'
import { css } from '@emotion/core'

import {
  Footer,
  Navigation,
} from '../organisms'

export default () => (
  <section className="wrapper" css={style}>
    <Navigation />
    <Footer />
  </section>
)

const style = css({
})
