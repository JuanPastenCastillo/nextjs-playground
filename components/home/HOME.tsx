import Link from "next/link"
import { INDEX_HOMEWrapper } from "./styles/INDEX_HOMEWrapper"

export const INDEX_HOME = () => {
  return (
    <INDEX_HOMEWrapper>
      <h1>Home here</h1>

      <ul>
        <li>
          <Link href="playground">Playground here</Link>
        </li>
        <li>
          <Link href="challenges-useReducer">challenges-useReducer</Link>
        </li>
      </ul>
    </INDEX_HOMEWrapper>
  )
}
