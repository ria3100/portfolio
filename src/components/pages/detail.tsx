import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import { DetailTemplate } from '../templates'

export default ({ data }: any) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <>
      <Helmet
        title={`${frontmatter.title} | Ria`}
        meta={[
          { name: 'description', content: frontmatter.title },
        ]}
      >
      </Helmet>
      <DetailTemplate detailData={frontmatter} html={html} />
    </>
  )
}

export const pageQuery = graphql`
  query detailQuey($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "YYYY.MM.DD")
        path
        title
        tags
      }
    }
  }
`
