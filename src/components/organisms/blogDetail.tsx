import React from 'react'
import { css } from '@emotion/core'

import { Section, Container } from 'bloomer'
import { Animated } from '../atoms'

export default ({ html }) => (
  <Section css={style}>
    <Container>
      <Animated animationIn="fadeIn">
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Animated>
    </Container>
  </Section>
)

const style = css({
  padding: 0,
  background: '#f7f7f7',
  '.container': {
    padding: '32px 32px 64px',
    maxWidth: '960px',
    margin: '0 auto',
    background: '#fff',
    borderLeft: '1px solid #e4e4e4',
    borderRight: '1px solid #e4e4e4',

    '@media screen and (min-width: 769px)': {
      padding: '64px 64px 128px',
    },
  },

  h3: {
    margin: '1.6em 0 .8em',
    fontSize: '1.4em',
    fontWeight: 'bold',
    color: '#e91e63',
    paddingBottom: '2px',
    borderBottom: '2px solid #f27ba3',

    '&::before': {
      content: '"##"',
      paddingRight: '8px',
    },
  },
})
