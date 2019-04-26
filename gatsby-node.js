/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')
const _ = require('lodash')
const Promise = require('bluebird')
// const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateWebpackConfig = ({
  // stage,
  // rules,
  // loaders,
  // plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@': path.resolve('src/'),
      },
    },
  })
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const ListPage = path.resolve('./src/components/pages/list.tsx')
  const DetailPage = path.resolve('./src/components/pages/detail.tsx')
  const TagsPage = path.resolve('./src/components/pages/tags.tsx')

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              tags
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) return Promise.reject(result.errors)

    // 一覧件数
    const postsPerPage = 12

    // 一覧
    const posts = result.data.allMarkdownRemark.edges
    const numPages = Math.ceil(posts.length / postsPerPage)
    for (i in _.range(numPages)) {
      const currentPage = +i
      if (currentPage === 0) continue

      createPage({
        // path: i === 0 ? '/blog' : `/blog/${+currentPage + 1}`,
        path: `/page/${currentPage + 1}`,
        component: ListPage,
        context: {
          limit: postsPerPage,
          skip: currentPage * postsPerPage,
          numPages,
          currentPage: currentPage + 1,
          pagePath: ['/', '/page/'],
        },
      })
    }

    // const tagSet = new Set()
    const tagList = []
    const addTagList = tagNames => {
      for (tagName of tagNames) {
        const index = tagList.findIndex(tag => tag.name === tagName)
        if (index >= 0) {
          tagList[index].count = tagList[index].count + 1
        } else {
          tagList.push({ name: tagName, count: 1 })
        }
      }
    }

    // 詳細
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const { path, tags } = node.frontmatter
      if (tags) addTagList(tags)

      createPage({
        path,
        component: DetailPage,
        context: {}, // additional data can be passed via context
      })
    })

    // 指定したタグの記事一覧
    for (tag of tagList) {
      const numPages = Math.ceil(tag.count / postsPerPage)
      for (i in _.range(numPages)) {
        const currentPage = +i

        createPage({
          path:
            currentPage === 0
              ? `/tags/${_.kebabCase(tag.name)}/`
              : `/tags/${_.kebabCase(tag.name)}/${currentPage + 1}`,
          component: TagsPage,
          context: {
            tag: tag.name,
            limit: postsPerPage,
            skip: currentPage * postsPerPage,
            numPages,
            currentPage: currentPage + 1,
            pagePath: [
              `/tags/${_.kebabCase(tag.name)}/`,
              `/tags/${_.kebabCase(tag.name)}/`,
            ],
          },
        })
      }
    }
  })
}
