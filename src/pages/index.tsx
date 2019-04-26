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
