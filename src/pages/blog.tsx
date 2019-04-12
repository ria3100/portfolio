import React from 'react'
import { Helmet } from 'react-helmet'

import { BlogTemplate } from '../components/templates'

export default () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <BlogTemplate />
    </>
  )
}
