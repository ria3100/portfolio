import React from 'react'

import { Container } from 'bloomer'
import { Footer, Navigation, BlogList } from '../organisms'
import { DarkSection, SectionTitle } from '../atoms'

export default ({ title, listData }) => (
  <section className="wrapper">
    <Navigation />
    <DarkSection>
      <Container>
        <SectionTitle>{title}</SectionTitle>
        <small>{listData.totalCount} 件</small>
      </Container>
    </DarkSection>
    <BlogList
      listData={listData}
    />
    <Footer />
  </section>
)
