import styled from "styled-components"

export const INDEX_ChallengesWrapper = styled.ul`
  /* border: 2px solid crimson; */

  display: grid;
  gap: 20px;

  & > li {
    h2 {
      text-transform: capitalize;
    }

    ul {
      li {
        a {
          /* cursor: pointer; */

          &:hover {
            color: cornflowerblue;
          }
        }
      }
    }
  }
`
