type Props = {
  first: number
  second: number
}

export const sum = ({ first = 0, second = 0 }: Props): number => {
  let something =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non justo nec neque luctus tempus. Fusce interdum, justo eget dapibus commodo, tellus nisl fringilla libero, sit amet tincidunt turpis purus at justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eleifend justo et odio."

  let transform = something.split("").map((x) => Number(x))

  return first + second
}
