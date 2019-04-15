import React from 'react'
import styled from '@emotion/styled'

import { Box, Title } from 'bloomer'
import { Stars } from '../atoms'

export default (props) => {
  return (
    <Box {...props}>
      <ItemLabel>{props.items.title}</ItemLabel>
      <ul>
        {props.items.items.map((item, i) => (
          <Item key={i}>
            <ItemName>{item[0]}</ItemName>
            {item[1] && <Stars star={item[1]} />}
          </Item>
        ))}
      </ul>
    </Box>
  )
}

const ItemLabel = styled(Title)`
  font-family: 'Lato', sans-serif;
  font-weight: 100;

`

const Item = styled.li`
  height: 24px;
  margin-bottom: 8px;
`

const ItemName = styled.span`
  width: 160px;
  display: block;
  float: left;
`
