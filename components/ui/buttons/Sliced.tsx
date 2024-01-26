import { Bottom, SlicedWrapper, Top } from "./styles/SlicedWrapper"

export const SlicedButton = ({ children = "Sliced Button", isActive }: { children: string; isActive: boolean }) => {
  return (
    <SlicedWrapper isActive={isActive}>
      <Top>
        <span>{children}</span>
      </Top>
      <Bottom>
        <span>{children}</span>
      </Bottom>
    </SlicedWrapper>
  )
}
