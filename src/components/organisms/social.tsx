import React from 'react'
import styled from '@emotion/styled'

import { Container, Columns, Column, Icon } from 'bloomer'
import { WhiteSection, SectionTitle, Animated } from '../atoms'

export default () => {
  return (
    <WhiteSection className="is-medium">
      <Container>
        <SectionTitle tag="h3">Social</SectionTitle>
        <Columns isMobile>
          <ItemColumn isSize={4}>
            <Animated animationIn="fadeInUp">
              <a href="https://twitter.com/_Ria0130" target="_brank">
                <Icon isSize="large" className="fab fa-twitter fa-4x" /><br />
                Twitter<Icon className="fas fa-external-link-alt" />
              </a>
            </Animated>
          </ItemColumn>
          <ItemColumn isSize={4}>
            <Animated animationIn="fadeInUp" animationDelay={0.16}>
              <a href="https://github.com/ria3100" target="_brank">
                <Icon isSize="large" className="fab fa-github fa-4x" /><br/>
                GitHub<Icon className="fas fa-external-link-alt" />
              </a>
            </Animated>
          </ItemColumn>
          <ItemColumn isSize={4}>
            <Animated animationIn="fadeInUp" animationDelay={0.32}>
              <a href="https://www.wantedly.com/secret_profiles/yS5_jktzoGx6wgVJivFK3uefX3OXqz8T" target="_brank">
                <Icon isSize="large" className="far fa-grin-alt fa-4x" /><br/>
                Wantedly<Icon className="fas fa-external-link-alt" />
              </a>
            </Animated>
          </ItemColumn>
        </Columns>
      </Container>
    </WhiteSection>
  )
}

const ItemColumn = styled(Column)`
  text-align: center;
`
