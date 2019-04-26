import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

import { Title } from 'bloomer'
import { BlogDateTags } from '../molecules'

export default ({ item }: any) => {
  return (
    <section css={style}>
      <Title tag="h4">
        <Link to={item.frontmatter.path}>{item.frontmatter.title}</Link>
      </Title>
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: item.excerpt }}
      />
      <BlogDateTags
        date={item.frontmatter.date}
        tags={item.frontmatter.tags}
      />
    </section>
  )
}

const style = css({
  paddingBottom: '32px',
  borderBottom: '1px solid #ddd',
  marginBottom: '32px',

  'h4.title': {
    fontSize: '1.6em',
    marginBottom: '1em',

    '::before': {
      content: '"#"',
      color: '#e91e63',
      paddingRight: '8px',
    },
    ':hover::before': {
      color: '#f27ba3',
    },
  },

  '.blog-content': {
    'h2, h3': {
      color: 'inherit',
      fontSize: 'inherit',
      fontWeight: 'normal',
      border: 'none',

    },
  
    '.gatsby-resp-image-wrapper': {
      display: 'none !important',
    },

  },

})
