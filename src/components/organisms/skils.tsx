import React from 'react'

import { Section, Container, Tile } from 'bloomer'
import { SkilBox } from '../molecules'

export default () => {
  return (
    <Section className="is-medium">
      <Container>
        <Tile isAncestor>
          <Tile isSize={4} isVertical isParent>
            <Tile
              isChild
              render={props => <SkilBox items={skils.language} {...props} />}
            />
            <Tile
              isChild
              render={props => <SkilBox items={skils.back} {...props} />}
            />
          </Tile>
          <Tile isSize={8} isParent>
            <Tile
              isChild
              render={props => <SkilBox items={skils.front} {...props} />}
            />
          </Tile>
        </Tile>
        <Tile isAncestor>
          <Tile isSize={4} isParent>
            <Tile
              isChild
              render={props => <SkilBox items={skils.environment} {...props} />}
            />
          </Tile>
          <Tile isSize={4} isVertical isParent>
            <Tile
              isChild
              render={props => <SkilBox items={skils.DB} {...props} />}
            />
            <Tile
              isChild
              render={props => <SkilBox items={skils.infra} {...props} />}
            />
          </Tile>
          <Tile isSize={4} isParent>
            <Tile
              isChild
              render={props => <SkilBox items={skils.etc} {...props} />}
            />
          </Tile>
        </Tile>
      </Container>
    </Section>
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
      ['Storybook', 1]
    ],
  },
  back: {
    title: 'Back-end',
    items: [['Express', 4], ['Fuel PHP', 4], ['Laravel', 2], ['Flask', 1]],
  },
  DB: {
    title: 'DB',
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
      ['Docker', 4],
      ['Prettier', null],
      ['ESLint(TSLint)', null],
      ['Zsh', null],
      ['HHKB', null],
    ],
  },
  etc: {
    title: 'Etc',
    items: [],
  },
}
console.log(skils)
