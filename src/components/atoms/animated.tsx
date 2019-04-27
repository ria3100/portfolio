import React from 'react'
// import { AnimatedOnScroll } from 'react-animated-css-onscroll'
import styled from '@emotion/styled'

/* 
 * animationInDelay, animationOutDelay が動作しないから
 * CSSを定義するだけのコンポーネント
*/
export default props => {
  const delay = props.animationDelay ? props.animationDelay : 0
  const screenOffset = '' + props.screenOffset ? props.screenOffset : 50
  const delayIsMobile =
    props.animationDelayIsMobile === undefined
      ? true
      : props.animationDelayIsMobile

  return (
    <Animated
      delay={delay}
      animationIn={props.animationIn}
      animationOut={props.animationOut}
      // animationInDelay={props.animationInDelay}
      // animationOutDelay={props.animationOutDelay}
      animationInDuration={props.animationInDuration}
      animationOutDuration={props.animationOutDuration}
      style={props.style}
      innerRef={props.innerRef}
      className={props.className}
      animateOnMount={props.animateOnMount}
      screenOffset={screenOffset}
      delayIsMobile={delayIsMobile}
    >
      {props.children}
    </Animated>
  )
}

const Foo = ({ children }) => <div>{children}</div>

// const Animated = styled(AnimatedOnScroll)`
const Animated = styled.div`
  animation-delay: ${(props: any) => props.delay}s !important;
  ${(props: any) =>
    !props.delayIsMobile &&
    `
      @media screen and (max-width: 768px) {
        animation-delay: 0 !important;
      }
    `}
`
