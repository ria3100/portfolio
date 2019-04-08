import * as React from 'react'
import { Helmet } from 'react-helmet'

import TopTemplate from '../components/templates/topTemplate'

export default () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <TopTemplate />
    </>
  )
}
