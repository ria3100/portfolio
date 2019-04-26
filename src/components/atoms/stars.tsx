import React from 'react'
import { css } from '@emotion/core'

import { Icon } from 'bloomer'

export default props => (
  <span css={style}>
    {[1, 2, 3, 4, 5].map((_, i) => {
      return (
        <Icon
          key={i}
          className={`${i + 1 <= props.star ? 'fas' : 'far'} fa-star`}
        />
      )
    })}
  </span>
)

const style = css({
  '& .icon': {
    width: '1rem',
    height: '1rem',
    fontSize: '12px',
    color: '#e91e63',
  }
})
