import React from 'react'
import styled from '@emotion/styled'

import { Box } from 'bloomer'

export default (props) => {
  return (
    <StyledBox>
      {props.item.name}
    </StyledBox>
  )
}

const StyledBox = styled(Box)`
  text-align: center;
`
