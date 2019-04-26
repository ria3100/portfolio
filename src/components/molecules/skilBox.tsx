import React from 'react'
import { css } from '@emotion/core'

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
      <div className={props.isLarge && 'is-large'} css={style}>
        {props.data.title && <Title>{props.data.title}</Title>}
        {rows[0].length > 0 &&
          rows.map((row, rowIndex) => (
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
      </div>
    </Animated>
  )
}

const style = css({
  overflow: 'auto',
  height: '100%',

  '& .title': {
    fontFamily: ['Lato', 'sans-serif'],
    fontWeight: 100,
  },

  '& ul': {
    display: 'block',
    float: 'left',
    width: '100%',

    '& li': {
      height: '36px',
      marginBottom: '12px',
      paddingBottom: '12px',
      borderBottom: '1px solid #eee',

      '&:last-child': {
        borderBottom: 'none',
      },

      '& .item-name': {
        display: 'block',
        float: 'left',
      },

      '& .star-area': {
        display: 'block',
        float: 'right',
      },
    },
  },

  '&.is-large ul': {
    '@media screen and (min-width: 769px)': {
      maxWidth: 'calc(50% - 32px)',
      '&:last-child': {
        marginLeft: '64px',
      },
    },
  },

  '& .icon.is-large': {
    color: '#f7a9c4',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',

    '& .fas.fa-laugh': {
      transition: '.5s',
      transform: 'rotateZ(0deg)',
      '&:hover': {
        transform: 'rotateZ(40deg)',
      },
    },
  },
})
