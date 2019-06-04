import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from "gatsby"

import { IndexTemplate } from '../components/templates'

export default ({ data }) => {
  // const { scroll } = useContext(AppContext)
  const { totalCount } = data.allMarkdownRemark
  const listData = {
    items: data.allMarkdownRemark.edges.slice(0, 12),
    page: {
      currentPage: 1,
      numPages: totalCount > 12 ? 2 : 1,
      pagePath: ['/', '/page/'],
    },
  }

  return (
    <>
      <Helmet
        title="Ria"
        meta={[
          { name: 'description', content: 'Ria' },
          { property: 'og:type', content: 'blog' },
          { property: 'og:title', content: 'Ria' },
          { property: 'og:url', content: `https://ria-blog.org/` },
          { property: 'og:image', content: 'https://ria-blog.org/icons/icon-512x512.png' },
          { property: 'og:site_name', content: 'Ria' },
          { property: 'og:locale', content: 'ja_JP' },
        ]}
      />
      <IndexTemplate listData={listData} />
    </>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 20
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      totalCount
      edges {
        node {
          excerpt(format: HTML)
          frontmatter {
            title
            date
            path
            tags
          }
        }
      }
    }
  }
`
