import React from 'react'
import styled from '@emotion/styled'

import { Box, Title } from 'bloomer'

export default (props) => {
  return (
    <StyledBox {...props}>
      <Title>foo</Title>
      <p>bar</p>
    </StyledBox>
  )
}

const StyledBox = styled(Box)`
  
`
