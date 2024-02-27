import styled, { css } from "styled-components"
import { Routes_Accepted } from "../INDEX_NavBar"

export const enum Classes_NavBar {
  HOME_ACTIVE = "HOME_ACTIVE",
  CHALLENGES_ACTIVE = "CHALLENGES_ACTIVE",
}

type Props = {
  actualRoute?: Routes_Accepted | true | false
  isHome: boolean
}

const activeHome = () => css`
  background-size: 100% 3px;
  color: crimson;
`

export const NavBarWrapper = styled.div<Props>`
  margin-inline: 16px;
  padding: 24px;

  ul {
    list-style: none;

    display: grid;
    grid-auto-flow: column;
    place-items: center;
    /* grid-template-columns: auto 1fr; */

    font-size: 24px;

    & > :nth-child(1) {
      background: no-repeat 0 100%;
      background-image: linear-gradient(
        90deg,
        hsl(358.5, 100%, 61.8%),
        hsl(196.2, 100%, 52.7%)
      );
      background-size: 0% 2px;
      transition: all 0.3s ease;

      &:hover,
      &:focus-visible {
        ${activeHome()}
      }

      ${({ isHome }) =>
        isHome &&
        css`
          ${activeHome()}
        `}
    }

    & > :nth-child(2) {
      margin: auto;
    }

    li {
      text-transform: capitalize;
    }
  }
`
