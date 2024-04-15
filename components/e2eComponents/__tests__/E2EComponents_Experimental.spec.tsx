import { expect, test } from "@playwright/experimental-ct-react"
import { E2EComponents_Experimental } from "../E2EComponents_Experimental"

test.use({ viewport: { width: 500, height: 500 } })

test("should work", async ({ mount }) => {
  const component = await mount(<E2EComponents_Experimental />)
  await expect(component).toContainText("Learn React")
})
