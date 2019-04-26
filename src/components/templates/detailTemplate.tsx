import React from 'react'
import { css } from '@emotion/core'

import { Container } from 'bloomer'
import { BlogDetail, Footer, Navigation } from '../organisms'
import { BlogDateTags } from '../molecules'
import { DarkSection, SectionTitle } from '../atoms'

export default ({ detailData, html }) => (
  <section className="wrapper" css={style}>
    <Navigation />
    <DarkSection>
      <Container>
        <SectionTitle>{detailData.title}</SectionTitle>
        <BlogDateTags date={detailData.date} tags={detailData.tags} />
      </Container>
    </DarkSection>
    <BlogDetail html={html} />
    <Footer />
  </section>
)


const style = css({

})
