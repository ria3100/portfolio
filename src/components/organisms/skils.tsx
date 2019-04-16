import React from 'react'

import { Container, Tile } from 'bloomer'
import { SkilBox } from '../molecules'
import { NormalSection } from '../atoms'

export default () => {
  return (
    <NormalSection>
      <Container>
        <Tile isAncestor>
          <Tile isSize={4} isVertical isParent>
            <SkilBox data={skils.language} />
            <SkilBox data={skils.back} />
          </Tile>
          <Tile isSize={8} isParent>
            <SkilBox data={skils.front} animationDelay={0.16} isLarge />
          </Tile>
        </Tile>
        <Tile isAncestor>
          <Tile isSize={4} isParent>
            <SkilBox data={skils.environment} />
          </Tile>
          <Tile isSize={4} isVertical isParent>
            <SkilBox data={skils.db} animationDelay={0.16} />
            <SkilBox data={skils.infra} />
          </Tile>
          <Tile isSize={4} isParent>
            <SkilBox
              className="is-hidden-mobile"
              data={skils.etc}
              animationDelay={0.16 * 2}
            />
          </Tile>
        </Tile>
      </Container>
    </NormalSection>
  )
}

// TODO 別ファイルにしたい
const skils = {
  language: {
    title: 'Language',
    items: [
      ['JavaScript', 5],
      ['TypeScript', 3],
      ['Python', 3],
      ['PHP', 4],
      ['Rust', 1],
      ['Haskell', 1],
    ],
  },
  front: {
    title: 'Front-end',
    items: [
      ['HTML5', 4],
      ['CSS3', 4],
      ['SASS', 3],
      ['React', 5],
      ['Redux', 3],
      ['Vue.js', 5],
      ['Vuex', 5],
      ['Nuxt.js', 3],
      ['Gatsby', 4],
      ['Webpack', 3],
      ['Parcel', 3],
      ['Styled Components', 4],
      ['Emotion', 3],
      ['jQuery', 5],
      ['Bluma', 4],
      ['Bootstrap', 3],
      ['Gulp', 3],
      ['VuePress', 1],
      ['Electron', 1],
      ['Storybook', 1],
      ['etc...', null],
    ],
  },
  back: {
    title: 'Back-end',
    items: [['Express', 4], ['Fuel PHP', 4], ['Laravel', 2], ['Flask', 1]],
  },
  db: {
    title: 'DataBase',
    items: [['MySQL', 4], ['PostgreSQL', 4], ['MongoDB', 1]],
  },
  infra: {
    title: 'Infra / Server',
    items: [['Nginx', 4], ['Apache', 4], ['Netlify', 3], ['FireBase', 1]],
  },
  environment: {
    title: 'Environment',
    items: [
      ['MacOS', 5],
      ['Arch Linux', 3],
      ['Ubuntu', 3],
      ['VS Code', 5],
      ['Vim', 4],
      ['Git', 4],
      ['Docker', 3],
      ['Prettier', null],
      ['ESLint (TSLint)', null],
      ['Zsh', null],
      ['hyper.js', null]
    ],
  },
  etc: {
    title: '',
    items: [],
  },
}
