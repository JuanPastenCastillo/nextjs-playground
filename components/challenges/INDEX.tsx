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
        const hasSomethingSpecial = x.hasSomethingSpecial
          ? x.hasSomethingSpecial
          : null

        const componentName = x.allComponent ? x.allComponent : null

        if (hasSomethingSpecial) {
          return (
            <>
              <li>
                <h2>{x.UI.title} Challenges</h2>
                <h2>
                  Something Special!, is this →{" "}
                  {hasSomethingSpecial.specificStyles?.numberOfCards} number
                </h2>
                <ul>
                  {Array(x.howManyChallenges)
                    .fill(0)
                    .map((xDeep1, indexDeep1) => {
                      return (
                        <>
                          <li>
                            <Link
                              href={{
                                pathname: `${asPath}/${x.route}/${
                                  indexDeep1 + 1
                                }`,
                                query: {
                                  howManyChallenges: x.howManyChallenges,
                                  title: x.UI.title,
                                },
                              }}
                              as={`${asPath}/${x.route}/${indexDeep1 + 1}`}>
                              {componentName &&
                                `Name of challenge: ${
                                  componentName?.[indexDeep1].name
                                } (${indexDeep1 + 1})`}
                            </Link>
                          </li>
                        </>
                      )
                    })}
                </ul>
              </li>
            </>
          )
        }

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
                              pathname: `${asPath}/${x.route}/${
                                indexDeep1 + 1
                              }`,
                              query: {
                                howManyChallenges: x.howManyChallenges,
                                title: x.UI.title,
                              },
                            }}
                            as={`${asPath}/${x.route}/${indexDeep1 + 1}`}>
                            {componentName &&
                              `Name of challenge: ${
                                componentName?.[indexDeep1].name
                              } (${indexDeep1 + 1})`}
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
