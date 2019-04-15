import React from 'react'
import styled from '@emotion/styled'
import moment from 'moment'

import { Section, Container, Columns, Column, Image } from 'bloomer'

export default () => {
  const age = moment().diff(moment([1990, 1-1, 30]), 'years')

  return (
    <Section className="is-medium">
      <Container>
        <Columns>
          <ImgColumn isSize={4}>
            <ProfileImage src="https://via.placeholder.com/128x128" />
          </ImgColumn>
          <TextColumn isSize={8}>
            <ul>
              <li><span>NAME:</span> Atsushi Sakamoto</li>
              <li><span>AGE:</span> {age}</li>
              <li><span>JOB TITLE:</span> Front-end Engineer</li>
              <li><span>LOCATION:</span> Osaka, Japan</li>
            </ul>
            foofoofoofoofoofoofoofoofoofoofoofoofoofoofoofoofoofoofoofoofoofoofoofoo
            foofoofoofoofoofoofoofoofoofoofoofoofoofoofoofoofoofoofoofoofoofoofoofoo
            foofoofoofoofoofoofoofoofoofoofoofoofoofoofoofoofoofoofoofoofoofoofoofoo
          </TextColumn>
        </Columns>
      </Container>
    </Section>
  )
}


const ProfileImage = styled(Image)`
  border-radius: 50%;
  overflow: hidden;
`

const ImgColumn = styled(Column)`
  padding: 0 16px;
`

const TextColumn = styled(Column)`
  & li {
    float: left;
    width: 100%;

    & span {
      display: inline-block;
      width: 8rem;
      font-weight: bold;
    }
  }
  
`
