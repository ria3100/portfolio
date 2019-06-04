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
          { property: 'og:type', content: 'blog' },
          // { property: 'og:description', content: 'description' },
          { property: 'og:title', content: frontmatter.title },
          // { property: 'og:url', content: 'url' },
          // { property: 'og:image', content: 'image' },
          { property: 'og:site_name', content: 'Ria' },
          { property: 'og:locale', content: 'ja_JP' },
        ]}
      />
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
