import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import { ListTemplate } from '../templates'

export default function PostTemplate({ pageContext, data }: any) {
  const listData = {
    items: data.allMarkdownRemark.edges,
    totalCount: data.allMarkdownRemark.totalCount,
    page: { ...pageContext },
  }
  const { tag } = pageContext

  return (
    <>
      <Helmet
        title={`${tag} | Ria`}
        meta={[
          { name: 'description', content: tag },
        ]}
      />
      <ListTemplate
        title={tag}
        listData={listData}
      />
    </>
  )
}

export const pageQuery = graphql`
  query tagListQuery($tag: String!, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      skip: $skip
      limit: $limit
      filter: { frontmatter: { tags: { eq: $tag } } }
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
