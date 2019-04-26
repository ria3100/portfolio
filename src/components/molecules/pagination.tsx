import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

import {
  Pagination,
  Icon
} from 'bloomer'

export default ({ page }: any) => {
  const { currentPage, numPages, pagePath } = page
  const isPrev = 1 < currentPage
  const isNext = currentPage < numPages

  return (
    <Pagination css={style}>
      <Link
        to={currentPage === 2 ? pagePath[0] : pagePath[1] + (currentPage - 1)}
        className="pagination-previous"
        disabled={!isPrev}
        onClick={e => !isPrev && e.preventDefault()}
      >
        <Icon className="fas fa-angle-left" />
        Prev
      </Link>
      <Link
        to={pagePath[1] + (currentPage + 1)}
        className="pagination-next"
        disabled={!isNext}
        onClick={e => !isNext && e.preventDefault()}
      >
        Next
        <Icon className="fas fa-angle-right" />
      </Link>
    </Pagination>
  )
}

const style = {
  '.icon .fa-angle-left': {
    marginRight: '4px',
    color: '#e91e63',
  },
  '.icon .fa-angle-right': {
    marginLeft: '4px',
    color: '#e91e63',
  },
}
