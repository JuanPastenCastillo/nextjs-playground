import styled, { css } from "styled-components"

export const dialogCSS = () => css`
  margin: auto;

  &::backdrop {
    background-color: hsla(218.5, 79.2%, 66.1%, 0.61);
  }
`

export const Dialog_DWrapper = styled.dialog`
  /* ${dialogCSS()}; */

  margin: auto;

  &::backdrop {
    background-color: hsla(218.5, 79.2%, 66.1%, 0.61);
  }

  border-radius: 8px;
  border: 2px solid #d3ced5;

  & > :nth-child(1) {
    display: grid;

    position: relative;

    & > :nth-child(1) {
      position: absolute;
      right: 16px;
      top: 16px;

      & > * {
        fill: white;
      }

      &:hover {
        filter: drop-shadow(1px 1px 1px hsla(0, 0%, 0%, 0.25));

        & > * {
          fill: crimson;
        }
      }
    }
  }
`
