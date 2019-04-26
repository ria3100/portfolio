import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import { ListTemplate } from '../templates'

export default ({ pageContext, data }: any) => {
  const listData = {
    items: data.allMarkdownRemark.edges,
    totalCount: data.allMarkdownRemark.totalCount,
    page: { ...pageContext },
  }

  return (
    <>
      <Helmet
        title="All | Ria"
        meta={[
          { name: 'description', content: 'All' },
        ]}
      />
      <ListTemplate title="All" listData={listData} />
    </>
  )
}

export const pageQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      skip: $skip
      limit: $limit
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
