import React from 'react'
import { css } from '@emotion/core'

import { Hero, HeroBody, Title, Subtitle, Container } from 'bloomer'
import { Animated } from '../atoms'

export default () => {
  return (
    <Hero isColor="dark" isSize="medium" css={style}>
      <HeroBody>
        <Container hasTextAlign="centered">
          <Animated animationInDuration={2400}>
            <Title>Ria</Title>
          </Animated>
          <Animated animationIn="fadeInUp" animationDelay={0.16}>
            <Subtitle>Front-end Engineer</Subtitle>
          </Animated>
        </Container>
      </HeroBody>
    </Hero>
  )
}


const style = css`
  & .hero-body {
    color: hsl(0, 0%, 96%);
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  & .title {
    font-size: 3em;
    font-size: 140px;
    line-height: 140px;
    font-weight: 700;
    font-family: 'Product Sans', sans-serif;
  }

  & .subtitle {
    font-family: 'Lato', sans-serif;
    font-size: 1.5rem;
  }
`
