import React from 'react'
import { css } from '@emotion/core'

import { Container, Button, Tag, Icon } from 'bloomer'
import { NormalSection, SectionTitle } from '../atoms'

export default () => {
  return (
    <NormalSection css={style}>
      <Container>
        <SectionTitle tag="h3">Source Code</SectionTitle>
        <div className="link-button">
          <a target="_brank" href="https://github.com/ria3100/portfolio">
            <Button isColor="white" isFocused isSize="large">
              <Icon className="fab fa-github-square" />
              <span>GitHub</span>
            </Button>
          </a>
        </div>
        <Tag isColor="light">#React</Tag>&nbsp;|&nbsp;
        <Tag isColor="light">#React Hooks</Tag>&nbsp;|&nbsp;
        <Tag isColor="light">#TypeScript</Tag>&nbsp;|&nbsp;
        <Tag isColor="light">#Redux</Tag>&nbsp;|&nbsp;
        <Tag isColor="light">#re-ducks</Tag>&nbsp;|&nbsp;
        <Tag isColor="light">#Atmic Design</Tag>&nbsp;|&nbsp;
        <Tag isColor="light">#Bulma</Tag>&nbsp;|&nbsp;
        <Tag isColor="light">#Emotion</Tag>&nbsp;|&nbsp;
        <Tag isColor="light">#Prettier</Tag>&nbsp;|&nbsp;
        <Tag isColor="light">#TSLint</Tag>&nbsp;|&nbsp;
        <Tag isColor="light">#Netlify</Tag>
      </Container>
    </NormalSection>
  )
}

const style = css`
  & .link-button {
    text-align: center;
    width: 100%;
    float: left;
    margin-bottom: 32px;
  }
`
