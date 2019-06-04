import React from 'react'
import { css } from '@emotion/core'
import moment from 'moment'

import { Container, Columns, Column, Image } from 'bloomer'

import profileImg from '../../assets/images/profile.jpg'

export default () => {
  const age = moment().diff(moment([1990, 1-1, 30]), 'years')

  return (
    <Container css={style}>
      <Columns>
        <Column className="img-column" isSize={4}>
          <Image src={profileImg} />
        </Column>
        <Column className="text-column" isSize={8}>
          <div className="about">
            <p className="name">
              <strong>Ria🦀</strong>
              <small>Atsushi Sakamoto</small>
            </p>
            <p>Front-end Engineer / Full-stack JavaScript Developer</p>
            <p>location: Osaka, age: {age}</p>
            <p className="text">
              Reactを用いたフロントエンド開発が得意。
              フロント周辺技術や関数型言語が好き。
              使用言語は JavaScript, TypeScript, Python, Rust, Dart ほか。<br />
              お問い合わせ、転職/副業のお誘いは気軽に{' '}
              <a
                href="https://twitter.com/_Ria0130"
                target="blank"
                alt="_Ria0130"
              >
                Twitter
              </a>{' '}
              の DM まで。
            </p>
          </div>
        </Column>
      </Columns>
    </Container>
  )
}

const style = css({
  borderTop: '2px solid #e4e4e4',
  padding: '64px 64px 64px 64px !important',

  '& .img-column': {
    padding: '0 16px',

    '& img': {
      borderRadius: '50%',
      overflow: 'hidden',
      '@media screen and (max-width: 768px)': {
        maxWidth: '60%',
        margin: '0 auto 2rem',
      },
    },
  },

  '& .text-column': {
    '.about': {
      '.name strong': {
        fontFamily: ['Lato', 'sans-serif'],
        letterSpacing: '0.05em',
        fontWeight: 250,
        fontSize: '2em',
      },
      '.name small': {
        marginLeft: '16px',
        fontSize: '1em',
      },
      '.text': {
        marginTop: '16px',
      },
    },
    '@media screen and (min-width: 769px)': {
      paddingLeft: '32px',
    },
  },
})
