import React from 'react'
import { css } from '@emotion/core'

import { Icon } from 'bloomer'

export default ({ date }: any) => (
  <span css={style}>
    <Icon className="far fa-clock" />
    {date}
  </span>
)

const style = css({
  display: 'inline-block',
  marginRight: '1.6em',
  '.icon i': {
    paddingRight: '4px',
  },
})
