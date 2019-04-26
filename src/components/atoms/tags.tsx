import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import _ from 'lodash'

import { Icon, Tag } from 'bloomer'

export default ({ tags }: any) => (
  <span css={style}>
    <Icon className="fas fa-tags" />
    {tags.map((tag: any) => (
      <Link to={`/tags/${_.kebabCase(tag)}`} key={tag}>
        <Tag>{tag}</Tag>
      </Link>
    ))}
  </span>
)

const style = css({
  display: 'inline-block',
  a: {
    paddingRight: '8px',
    color: 'inherit',

    ':hover': {
      color: '#ee4c83',
    },
  },
  '.icon i': {
    paddingRight: '4px',
  },
  '.tag': {
    background: 'inherit',
    color: 'inherit',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
})
