import styled from "@emotion/styled"

type Props = {
  primary?: boolean
}

export const ContainerCSS_Styled = styled.div<Props>`
  /* background-color: ${({ primary }) => (primary ? "crimson" : "green")}; */

  /* background-color: crimson; */
  /* filter: sepia(110%); */

  a:nth-of-type(1),
  a:nth-of-type(2) {
    display: block;
  }

  .dialog {
    border: 2px solid green;

    dialog[open] {
      border: 20px solid crimson;
      margin: auto;
    }

    ::backdrop {
      background-image: linear-gradient(
        45deg,
        magenta,
        rebeccapurple,
        dodgerblue,
        green
      );
      opacity: 0.75;
    }
  }

  & > div {
    width: 500px;

    img {
      border: 20px solid green;

      width: 100%;
    }
  }

  img {
    border: 2px solid crimson;
    width: 250px;
  }

  div:nth-of-type(2) {
    border: 2px solid green;

    display: grid;

    gap: 16px;
  }
`
