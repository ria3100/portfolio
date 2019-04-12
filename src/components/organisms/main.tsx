import React from 'react'
import styled from '@emotion/styled'

import { Hero, HeroBody, Title, Subtitle, Container } from 'bloomer'

export default () => {
  return (
    <Hero isColor="dark" isSize="medium">
      <StyledHeroBody>
        <Container hasTextAlign="centered">
          <StyledTitle>Ria</StyledTitle>
          <StyledSubtitle>Front-end Developer</StyledSubtitle>
        </Container>
      </StyledHeroBody>
    </Hero>
  )
}

const StyledHeroBody = styled(HeroBody)`
  color: hsl(0, 0%, 96%);
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledTitle = styled(Title)`
  font-size: 3em;
  font-size: 140px;
  line-height: 140px;
  font-weight: 700;
  font-family: 'Product Sans', sans-serif;
`

const StyledSubtitle = styled(Subtitle)`
  font-family: 'Lato', sans-serif;
  font-size: 1.5rem;
`
