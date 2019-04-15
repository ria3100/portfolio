import React from 'react'
import styled from '@emotion/styled'

import { Container, Columns, Column, Box } from 'bloomer'
import { DarkSection, Animated } from '../atoms'

import reactLogo from '../../assets/svg/react.svg'
import vueLogo from '../../assets/svg/vue.svg'
import tsLogo from '../../assets/svg/typescript.svg'

export default () => {
  return (
    <DarkSection className="is-medium">
      <Container>
        <Columns>
          <Column isSize={4}>
            <Animated animationIn="fadeInUp">
              <Box>
                <LogoImg bg={reactLogo} />
              </Box>
            </Animated>
          </Column>
          <Column isSize={4}>
            <Animated animationIn="fadeInUp" animationDelay={0.16}>
              <Box>
                <LogoImg bg={vueLogo} />
              </Box>
            </Animated>
          </Column>
          <Column isSize={4}>
            <Animated animationIn="fadeInUp" animationDelay={0.32}>
              <Box>
                <LogoImg bg={tsLogo} />
              </Box>
            </Animated>
          </Column>
        </Columns>
      </Container>
    </DarkSection>
  )
}

const LogoImg = styled.div`
  content: '';
  height: 160px;
  width: 160px;
  margin: 0 auto;
  background: url(${(props: any) => (props.bg)}) center center no-repeat;
  background-size: contain;
`
