import styled, { css } from "styled-components"

type CalculateTransitionForTopBottom_Props = {
  lineDelay: string
  transitionTopBottom: string
}

const calculateTransitionForTopBottom = (
  lineDelay: number = 1000,
): CalculateTransitionForTopBottom_Props => {
  return {
    lineDelay: `${lineDelay}ms`,
    transitionTopBottom: `${(lineDelay * 0.035) / 100}s`,
  }
}

const transitionDelayBase = 800
const transitionDelay = `${
  calculateTransitionForTopBottom(transitionDelayBase).lineDelay
}`
const transitionDelay_topBottom = `${
  calculateTransitionForTopBottom(transitionDelayBase).transitionTopBottom
}`

const sharedStyles = () => css`
  border-color: crimson;

  & > :nth-child(1) {
    top: -16px;
  }

  & > :nth-child(2) {
    bottom: -16px;
    transform: rotateX(180deg);
  }

  & > :nth-child(1),
  & > :nth-child(2) {
    transition-delay: ${transitionDelay_topBottom};
  }

  &:before {
    width: calc(100% + calc(35px * 2));
    height: 2px;
  }
`

export const Top = styled.div`
  position: relative;
  height: 0px;

  top: 0;

  transition: all ${transitionDelay_topBottom}
    cubic-bezier(1, -0.055, 0.025, 1.04); /* custom */

  transition-timing-function: cubic-bezier(1, -0.055, 0.025, 1.04); /* custom */

  transition-delay: ${transitionDelay_topBottom};
`

export const Bottom = styled.div`
  position: relative;
  height: 24px;
  bottom: -6px;

  transition: all ${transitionDelay_topBottom}
    cubic-bezier(1, -0.055, 0.025, 1.04); /* custom */

  transition-timing-function: cubic-bezier(1, -0.055, 0.025, 1.04); /* custom */

  transition-delay: ${transitionDelay_topBottom};

  span {
    top: -6px;
    position: absolute;
    left: 0;
    overflow: hidden;
  }
`

type Styled_Props = {
  isactive?: boolean
}

export const SlicedWrapper = styled.button<Styled_Props>`
  padding: 1.4rem 2.5rem;
  border: 2px solid #ffffff;
  border-radius: 0rem;
  color: #ffffff;
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 0.6rem;
  position: relative;
  background-color: transparent;

  text-transform: capitalize;

  cursor: pointer;

  transition: all ${transitionDelay} cubic-bezier(0.89, -0.17, 0.14, 1.225); /* custom */

  transition-timing-function: cubic-bezier(
    0.89,
    -0.17,
    0.14,
    1.225
  ); /* custom */

  &:before {
    content: "";
    height: 1px;
    width: 60px;
    background-color: #ffffff;
    position: absolute;
    /* margin-top: 10px; */
    top: 50%;
    right: -35px;

    transition: all ${transitionDelay} cubic-bezier(0.89, -0.17, 0.14, 1.225);

    transition-timing-function: cubic-bezier(
      0.89,
      -0.17,
      0.14,
      1.225
    ); /* custom */
  }

  &:hover,
  &:focus-visible {
    ${sharedStyles()};
  }

  ${({ isactive }) =>
    isactive &&
    css`
      ${sharedStyles()}
    `}
`
