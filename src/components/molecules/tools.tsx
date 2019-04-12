import React from 'react'

import { Container, Columns, Column, Box } from 'bloomer'
// import { ToolBox } from '../molecules'
import { DarkSection } from '../atoms'

export default () => {
  return (
    <DarkSection className="is-medium">
      <Container>
        <Columns>
          <Column isSize={4}>
            <Box>SPA</Box>
          </Column>
          <Column isSize={4}>
            <Box>SPA</Box>
          </Column>
          <Column isSize={4}>
            <Box>SPA</Box>
          </Column>
        </Columns>
      </Container>
    </DarkSection>
  )
}
