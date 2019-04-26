import styled from '@emotion/styled'

import { Section } from 'bloomer'

const gradationHeight = 20;
export default styled(Section)`
  background: #e91e63;
  color: hsl(0, 0%, 96%);
  border-top: ${gradationHeight}px solid #f7a9c4;
  position: relative;
  padding-top: calc(1rem + ${gradationHeight * 2}px);
  padding-bottom: 1rem;

  &:before {
    content: '';
    border-top: ${gradationHeight}px solid #f27ba3;
    position: absolute;
    top: 0;
    left: 0;
    height: ${gradationHeight * 2}px;
    width: 100%;
    background: #ee4c83;
    display: block;
    box-sizing: border-box;
  }

  & a {
    color: hsl(0, 0%, 96%);
    :hover {
      color: #f7a9c4;
    }

  }
`
