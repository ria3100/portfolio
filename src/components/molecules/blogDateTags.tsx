import React from 'react'
import { css } from '@emotion/core'

import { Date, Tags } from '../atoms'

export default ({ date, tags }: any) => (
  <small css={style}>
    <Date date={date} />
    {tags && <Tags tags={tags} />}
  </small>
)

const style = css({

})
