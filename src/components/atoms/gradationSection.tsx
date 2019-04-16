import styled from '@emotion/styled'

import { Section } from 'bloomer'

export default styled(Section)`
  background: #e91e63;
  color: hsl(0, 0%, 96%);
  border-top: 24px solid #f7a9c4;
  position: relative;
  padding: 9rem 1.5rem;
  &:before {
    content: '';
    border-top: 24px solid #f27ba3;
    position: absolute;
    top: 0;
    left: 0;
    height: 48px;
    width: 100%;
    background: #ee4c83;
    display: block;
    box-sizing: border-box;
  }
`
