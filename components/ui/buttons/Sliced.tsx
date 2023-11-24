import styled from "styled-components"

const enum Classes_Sliced {
  IsActive = "IsActive",
}

const SlicedWrapper = styled.button`
  padding: 1.4rem 2.5rem;
  border: 2px solid #ffffff;
  border-radius: 0rem;
  color: #ffffff;
  /* font-size: 0.6875rem; */
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 0.6rem;
  position: relative;
  background-color: transparent;

  text-transform: capitalize;

  cursor: pointer;

  transition: all 1000ms cubic-bezier(0.89, -0.17, 0.14, 1.225); /* custom */

  transition-timing-function: cubic-bezier(0.89, -0.17, 0.14, 1.225); /* custom */

  .top {
    position: relative;
    height: 0px;

    top: 0;

    transition: all 300ms cubic-bezier(1, -0.055, 0.025, 1.04); /* custom */

    transition-timing-function: cubic-bezier(1, -0.055, 0.025, 1.04); /* custom */

    transition-delay: 0.35s;
  }

  .bottom {
    position: relative;
    height: 24px;
    bottom: -6px;

    transition: all 300ms cubic-bezier(1, -0.055, 0.025, 1.04); /* custom */

    transition-timing-function: cubic-bezier(1, -0.055, 0.025, 1.04); /* custom */

    transition-delay: 0.35s;

    span {
      top: -6px;
      position: absolute;
      left: 0;
      overflow: hidden;
    }
  }

  &:before {
    content: "";
    height: 1px;
    width: 60px;
    background-color: #ffffff;
    position: absolute;
    /* margin-top: 10px; */
    top: 50%;
    right: -35px;

    transition: all 1000ms cubic-bezier(0.89, -0.17, 0.14, 1.225); /* custom */
    transition-timing-function: cubic-bezier(0.89, -0.17, 0.14, 1.225); /* custom */
  }

  &:hover,
  &:focus-visible,
  &.${Classes_Sliced.IsActive} {
    border-color: crimson;

    .top {
      top: -16px;
    }

    .bottom {
      bottom: -16px;
      transform: rotateX(180deg);
    }

    .top,
    .bottom {
      transition-delay: 0.35s;
    }

    &:before {
      width: calc(100% + calc(35px * 2));
      height: 2px;
    }
  }
`

export const SlicedButton = ({ textToButton = "Sliced Button", isActive }: { textToButton: string; isActive: boolean }) => {
  return (
    <SlicedWrapper className={isActive ? Classes_Sliced.IsActive : ""}>
      <div className="top">
        <span>{textToButton}</span>
      </div>
      <div className="bottom">
        <span>{textToButton}</span>
      </div>
    </SlicedWrapper>
  )
}
