import styled from "styled-components"

type Props = {
  allWidth?: boolean
}

export const MAP = styled.div<Props>`
  border: 2px solid crimson;
  height: 800vh;
  /* position: relative; */
  top: 0;

  width: 100%;

  display: grid;
  /* grid-template-columns: repeat(2, 1fr); */
  grid-template-columns: ${({ allWidth }) => (allWidth ? "repeat(1, 1fr)" : "repeat(2, 1fr)")};

  & > * {
    /* border: 2px solid crimson; */
  }

  & > :nth-child(1) {
    & > * {
      border: 2px solid green;
    }
  }

  & > :nth-child(2) {
    grid-row-start: ${({ allWidth }) => (allWidth ? "1" : "")};

    position: sticky;
    top: 0;
    right: 0;

    height: 100vh;
    width: 100%;

    & > :nth-child(1) {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;

      margin-top: 16px;
      margin-left: 16px;
    }

    & > :nth-child(2) {
    }
  }
`
