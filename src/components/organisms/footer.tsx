import React from 'react'
import styled from '@emotion/styled'

import { Footer, Container, Content, Columns, Column, Icon } from 'bloomer'

export default () => {
  return (
    <Footer id="footer">
      <Container>
        <StyledWrap>
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
            <Content isSize="small">
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
            </Content>
          </Content>
        </StyledWrap>
      </Container>
    </Footer>
  )
}

const StyledWrap = styled.div`
  color: hsl(0, 0%, 96%);
`
