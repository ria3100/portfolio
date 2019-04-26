import React from 'react'
import { Helmet } from 'react-helmet'

import { AboutTemplate } from '../components/templates'

export default () => (
  <>
    <Helmet title="About | Ria" meta={[{ name: 'description', content: 'about' }]} />
    <AboutTemplate/>
  </>
)
