/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import * as React from 'react'

import RootElement from './src/rootElement'

export const wrapRootElement = ({ element }) => (
  <RootElement>{element}</RootElement>
)

require(`${__dirname}/src/assets/scss/style.scss`)
