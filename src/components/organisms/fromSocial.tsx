import React from 'react'

import { Section, Container, Tile } from 'bloomer'
import { SkilBox } from '../molecules'

export default () => {
  return (
    <Section className="is-medium">
      <Container>
        <Tile isAncestor>
          <Tile isSize={4} isVertical isParent>
            <Tile isChild render={
              props => (
                <SkilBox {...props} />
              )
            } />
            <Tile isChild render={
              props => (
                <SkilBox {...props} />
              )
            } />
          </Tile>
          <Tile isParent>
            <Tile isChild render={
              props => (
                <SkilBox {...props} />
              )
            } />
          </Tile>
        </Tile>
      </Container>
    </Section>
  )
}

const skils = {
  tool: {
    name: 'Tools',
    items: [

    ]
  },
  front: {
    name: 'Front-end',
    items: [
      {
        name: 'React',
      }
    ]
  },
}
console.log(skils)
