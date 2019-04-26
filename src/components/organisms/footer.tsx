import React from 'react'
import { css } from '@emotion/core'

import { Footer, Container, Content, Columns, Column, Icon } from 'bloomer'
import { Social } from '../organisms'

export default () => (
  <section id="footer" css={style}>
    <Social />
    <Footer>
      <Container>
        <Content>
          <Columns>
            <Column>
              <p>
                Made with
                <Icon hasTextColor="danger" className="fa fa-heart" />
                by{' '}
                <a target="_blank" href="https://github.com/ria3100">
                  Ria
                </a>
              </p>
            </Column>
          </Columns>
          {/* <Content isSize="small">
            <p>
              The source code is licensed under{' '}
              <a
                target="_blank"
                href="https://opensource.org/licenses/mit-license.php"
              >
                MIT
              </a>
              .
            </p>
          </Content> */}
        </Content>
      </Container>
    </Footer>
  </section>
)

const style = css`
  color: hsl(0, 0%, 96%);
  p {
    text-align: center;
  }
`
