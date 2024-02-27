import { Bottom, SlicedWrapper, Top } from "./styles/SlicedWrapper"

export const SlicedButton = ({
  children = "Sliced Button",
  isactive,
}: {
  children: string
  isactive: boolean
}) => {
  return (
    <SlicedWrapper isactive={isactive}>
      <Top>
        <span>{children}</span>
      </Top>
      <Bottom>
        <span>{children}</span>
      </Bottom>
    </SlicedWrapper>
  )
}
