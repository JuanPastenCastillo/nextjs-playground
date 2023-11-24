import { AllDataInterface } from "@/pages/challenges"
import Link from "next/link"
import { INDEX_ChallengesWrapper } from "./styles/INDEX_ChallengesWrapper"

export type Props = {
  allDataChallenges: AllDataInterface
  asPath: string
}

export const INDEX_Challenges = ({ allDataChallenges, asPath }: Props) => {
  return (
    <INDEX_ChallengesWrapper>
      {allDataChallenges.map((x, index) => {
        return (
          <>
            <li>
              <h2>{x.UI.title} Challenges</h2>
              <ul>
                {Array(x.howManyChallenges)
                  .fill(0)
                  .map((xDeep1, indexDeep1) => {
                    return (
                      <>
                        <li>
                          <Link
                            href={{
                              pathname: `${asPath}/${x.route}/${indexDeep1 + 1}`,
                              query: {
                                howManyChallenges: x.howManyChallenges,
                                title: x.UI.title,
                              },
                            }}
                            as={`${asPath}/${x.route}/${indexDeep1 + 1}`}>
                            Challenge number {indexDeep1 + 1}
                          </Link>
                        </li>
                      </>
                    )
                  })}
              </ul>
            </li>
          </>
        )
      })}
    </INDEX_ChallengesWrapper>
  )
}
