import React from 'react'
import styled from '@emotion/styled'

import { Icon } from 'bloomer'

export default props => {
  return (
    <Stars>
      {[...Array(5).keys()].map((cur, i) => (
        <Icon
          key={i}
          className={`${i + 1 <= props.star ? 'fas' : 'far'} fa-star`}
        />
      ))}
    </Stars>
  )
}

const Stars = styled.span`
  & .icon {
    width: 1rem;
    height: 1rem;
    font-size: 12px;
    color: #e91e63;
  }
`
