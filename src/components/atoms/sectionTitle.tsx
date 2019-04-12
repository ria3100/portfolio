import styled from '@emotion/styled'

import { Title } from 'bloomer'

export default styled(Title)`
  &.title {
    text-align: center;
    font-size: 2.5rem;
    color: inherit;
    font-family: 'Lato', sans-serif;
    letter-spacing: 0.05em;
    font-weight: 100;
    &:not(:last-child) {
      margin-bottom: 64px;
    }
  }
`
