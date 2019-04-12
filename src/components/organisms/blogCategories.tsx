import React from 'react'
import styled from '@emotion/styled'

import { Container } from 'bloomer'
import { WhiteSection, SectionTitle } from '../atoms'

export default () => {
  return (
    <WhiteSection className="is-medium">
      <Container>
        <SectionTitle tag="h3">Blog</SectionTitle>
        <Text>Coming Soon</Text>
      </Container>
    </WhiteSection>
  )
}

const Text = styled.p`
  text-align: center;
  margin-top: 128px;
`
