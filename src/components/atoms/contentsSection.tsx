import React from 'react'
import { css } from '@emotion/core'

import { Section } from 'bloomer'

export default ({ children }) => {
  return (
    <Section css={style}>
      <section>{ children }</section>
    </Section>
  )

}

const style = css({
  padding: 0,
  '& section': {
    padding: '64px',
    maxWidth: '960px',
    margin: '0 auto',
    background: '#fff',
    borderLeft: '1px solid #e4e4e4',
    borderRight: '1px solid #e4e4e4',
  },
})
