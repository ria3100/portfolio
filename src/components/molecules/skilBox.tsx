import React from 'react'
import styled from '@emotion/styled'

import { Title, Icon } from 'bloomer'
import { Stars, Animated } from '../atoms'

export default (props) => {

  const rows: any[] = []

  // 2つにわける
  if (props.isLarge) {
    const half = Math.trunc(props.data.items.length / 2)
    rows.push(props.data.items.slice(0, half))
    rows.push(props.data.items.slice(half + 1, props.data.items.length))
  } else {
    rows.push(props.data.items)
  }


  return (
    <Animated
      className={`${props.className} tile is-child box`}
      animationIn={props.animationIn || 'fadeInUp'}
      animationDelay={props.animationDelay}
      animationDelayIsMobile={false}
    >
      <StyledWrap isLarge={props.isLarge}>
        {props.data.title && <Title>{props.data.title}</Title>}
        {rows[0].length > 0 && rows.map((row, rowIndex) => (
          <ul key={rowIndex}>
            {row.map((item, itemIndex) => (
              <li key={itemIndex}>
                <span className="item-name">{item[0]}</span>
                <span className="star-area">
                  {item[1] && <Stars star={item[1]} />}
                </span>
              </li>
            ))}
          </ul>
        ))}
        {rows[0].length === 0 && (
          <Icon isSize="large" className="fas fa-laugh fa-8x" />
        )}
      </StyledWrap>
    </Animated>
  )
}

const StyledWrap = styled.div`
  overflow: auto;
  height: 100%;

  .title {
    font-family: 'Lato', sans-serif;
    font-weight: 100;
  }

  ul {
    display: block;
    float: left;
    width: 100%;
    ${(props: any) =>
      props.isLarge &&
      `
        @media screen and (min-width: 769px) {
          max-width: calc(50% - 32px);
          &:last-child {
            margin-left: 64px;
          }
        }
      `}

    & li {
      height: 36px;
      margin-bottom: 12px;
      padding-bottom: 12px;
      border-bottom: 1px solid #eee;
      &:last-child {
        border-bottom: none;
      }
    }
  }

  .item-name {
    display: block;
    float: left;
  }

  .star-area {
    display: block;
    float: right;
  }

  .icon.is-large {
    color: #f7a9c4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;

    & .fas.fa-laugh {
      transition: .5s;
      transform: rotateZ(0deg);
      &:hover {
        transform: rotateZ(40deg);
      }
    }
  }
`
