import React from 'react'
import { css } from '@emotion/core'
import moment from 'moment'

import { Container, Columns, Column, Image } from 'bloomer'
import { NormalSection } from '../atoms'

import profileImg from '../../assets/images/profile.jpg'

export default () => {
  const age = moment().diff(moment([1990, 1-1, 30]), 'years')

  return (
    <NormalSection css={style}>
      <Container>
        <Columns>
          <Column className="img-column" isSize={4}>
            <Image src={profileImg} />
          </Column>
          <Column className="text-column" isSize={8}>
            <ul>
              <li>
                <span>NAME:</span> Atsushi Sakamoto
              </li>
              <li>
                <span>AGE:</span> {age}
              </li>
              <li>
                <span>JOB TITLE:</span> Front-end Engineer
              </li>
              <li>
                <span>LOCATION:</span> Osaka, Japan
              </li>
            </ul>
            <div className="about">
              元バックエンドのフロントエンドエンジニア。
              <br />
              新しいものやワクワクするものが好きです。
              <br />
              これからの Web にフロントの技術は不可欠だと感じており、SPA や
              PWA などユーザー体験を重視したサイト構築が得意です。
              <br />
              関数型言語や Rust にも興味があります。
            </div>
          </Column>
        </Columns>
      </Container>
    </NormalSection>
  )
}

const style = css({
  '& .img-column': {
    padding: '0 16px',

    '& img': {
      borderRadius: '50%',
      overflow: 'hidden',
      '@media screen and (max-width: 768px)': {
        maxWidth: '60%',
        margin: '0 auto 3rem',
      },
    },
  },

  '& .text-column': {
    '& ul': {
      display: 'block',
      float: 'left',
      marginBottom: '16px',

      '& li': {
        float: 'left',
        width: '100%',

        '& span': {
          display: 'inline-block',
          width: '8rem',
          fontWeight: 'bold',
        },
      },
    },

    '@media screen and (min-width: 769px)': {
      paddingLeft: '32px',
    },
  },
})
