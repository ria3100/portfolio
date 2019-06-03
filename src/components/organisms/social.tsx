import React from 'react'
import { css } from '@emotion/core'

import { Container, Columns, Column, Icon } from 'bloomer'
import { GradationSection, Animated } from '../atoms'

export default () => {
  return (
    <GradationSection css={style}>
      <Container>
        <Columns isMobile>
          <Column isSize={4}>
            <Animated animationIn="fadeInUp">
              <a href="https://twitter.com/_Ria0130" rel="noreferrer" alt="Twitter" target="_brank">
                <Icon isSize="large" className="fab fa-twitter fa-2x" />
              </a>
            </Animated>
          </Column>
          <Column isSize={4}>
            <Animated animationIn="fadeInUp" animationDelay={0.16}>
              <a href="https://github.com/ria3100" rel="noreferrer" alt="GitHub" target="_brank">
                <Icon isSize="large" className="fab fa-github fa-2x" />
              </a>
            </Animated>
          </Column>
          <Column isSize={4}>
            <Animated animationIn="fadeInUp" animationDelay={0.32}>
              <a href="https://www.wantedly.com/secret_profiles/yS5_jktzoGx6wgVJivFK3uefX3OXqz8T" rel="noreferrer" alt="Wantedly" target="_brank">
                <Icon isSize="large" className="far fa-grin-alt fa-2x" />
              </a>
            </Animated>
          </Column>
        </Columns>
      </Container>
    </GradationSection>
  )
}

const style = css({
  '& .column': {
    textAlign: 'center',
  }
})
