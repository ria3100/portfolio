import React from 'react'
import { css } from '@emotion/core'

import { Section, Container } from 'bloomer'
import { BlogListItem, Pagination } from '../molecules'
import { Animated } from '../atoms'

export default ({ listData }: any) => (
  <Section css={style}>
    <Container>
      <Animated animationIn="fadeIn">
        {listData.items.map((post: any, i: number) => (
          <BlogListItem item={post.node} key={i} />
        ))}
      </Animated>
      <Pagination page={listData.page} />
    </Container>
  </Section>
)

const style = css({
  padding: 0,
  background: '#f7f7f7',
  '.container': {
    padding: '32px 32px 64px',
    maxWidth: '960px',
    margin: '0 auto',
    background: '#fff',
    borderLeft: '1px solid #e4e4e4',
    borderRight: '1px solid #e4e4e4',

    '@media screen and (min-width: 769px)': {
      padding: '64px 64px 128px',
    },
  },
  // borderBottom: '1px solid #e4e4e4',

  '& .container': {
    maxWidth: '960px',
    margin: '0 auto',
  },
})
