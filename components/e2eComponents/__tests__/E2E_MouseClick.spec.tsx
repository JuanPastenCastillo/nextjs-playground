import { expect, test } from "@playwright/experimental-ct-react"
import { E2E_MouseClick } from "../E2E_MouseClick"
import { E2E_MouseClickModifiers } from "../E2E_MouseClickModifiers"
import { E2E_MouseDBClick } from "../E2E_MouseDBClick"
import { E2E_MouseHover } from "../E2E_MouseHover"
import { E2E_MouseRightClick } from "../E2E_MouseRightClick"

test.describe("Testing Mouse Click", () => {
  test(`Testing E2E_MouseClick`, async ({ page, mount }) => {
    const component = await mount(<E2E_MouseClick />)
    await expect(component).toBeVisible()
  })

  test("Click", async ({ mount }) => {
    const component = await mount(<E2E_MouseClick />)

    const getData = component.getByTestId("click-state")

    await expect(getData).toHaveText("Click: false")

    let getButton = component.getByRole("button", { name: "Click me" })

    await getButton.click()

    await expect(getData).toHaveText("Click: true")

    await getButton.click()

    await expect(getData).toHaveText("Click: false")
  })

  test(`Testing E2E_MouseDBClick`, async ({ page, mount }) => {
    const component = await mount(<E2E_MouseDBClick />)
    await expect(component).toBeVisible()
  })

  test("Double Click", async ({ page, mount }) => {
    const component = await mount(<E2E_MouseDBClick />)

    const getData = component.getByTestId("dbclick-state")

    await expect(getData).toHaveText("Click: false")

    let getButton = component.getByRole("button", { name: "Click me" })

    await getButton.dblclick()

    await expect(getData).toHaveText("Click: true")

    await getButton.dblclick()

    await expect(getData).toHaveText("Click: false")
  })

  test(`Component «E2E_MouseRightClick» is visible`, async ({ mount }) => {
    const component = await mount(<E2E_MouseRightClick />)
    await expect(component).toBeVisible()
  })

  test("Right Click", async ({ page, mount }) => {
    const component = await mount(<E2E_MouseRightClick />)

    const getData = component.getByTestId("rightclick-state")

    await expect(getData).toHaveText("Click: false")

    let getButton = component.getByRole("button", { name: "Click me: right" })

    await getButton.click({ button: "right" })

    await expect(getData).toHaveText("Click: true")

    await getButton.click({ button: "right" })

    await expect(getData).toHaveText("Click: false")
  })

  test(`Component «E2E_MouseClickModifiers» is visible`, async ({ mount }) => {
    const component = await mount(<E2E_MouseClickModifiers />)
    await expect(component).toBeVisible()
  })

  test("Shift + Click", async ({ page, mount }) => {
    const component = await mount(<E2E_MouseClickModifiers />)

    const getData = component.getByTestId("rightclick-state")
    const getData2 = component.getByTestId("onclick-state")

    await expect(getData).toHaveText("Click with: false")
    await expect(getData2).toHaveText("Click with: false")

    let getButton = component.getByRole("button", { name: "Click me: M" })

    await getButton.click({ button: "right", modifiers: ["Alt"] })
    await getButton.click({ modifiers: ["Alt"] })
    await expect(getData).toHaveText("Click with: altKey")
    await expect(getData2).toHaveText("Click with: altKey")

    await getButton.click({ button: "right", modifiers: ["Control"] })
    await getButton.click({ modifiers: ["Control"] })
    await expect(getData).toHaveText("Click with: ctrlKey")
    await expect(getData2).toHaveText("Click with: ctrlKey")

    await getButton.click({ button: "right", modifiers: ["Meta"] })
    await getButton.click({ modifiers: ["Meta"] })
    await expect(getData).toHaveText("Click with: metaKey")
    await expect(getData2).toHaveText("Click with: metaKey")

    await getButton.click({ button: "right", modifiers: ["Shift"] })
    await getButton.click({ modifiers: ["Shift"] })
    await expect(getData).toHaveText("Click with: shiftKey")
    await expect(getData2).toHaveText("Click with: shiftKey")
  })

  test(`Component «E2E_MouseHover» is visible`, async ({ mount }) => {
    const component = await mount(<E2E_MouseHover />)
    await expect(component).toBeVisible()
  })

  test("Hover an element", async ({ page, mount }) => {
    const component = await mount(<E2E_MouseHover />)

    const getData = component.getByTestId("mousehover-state")
    await expect(getData).toHaveText("Mouse hover: false")

    let getButton = component.getByRole("button", { name: "Hover me" })

    await getButton.hover({})
    await expect(getData).toHaveText("Mouse hover: true")

    /*
     * Alternative 1: just hover other thing on the component
    await getData.hover() // Unhover the button
    */
    /*
    * Alternative 2: use «.dispatchEvent("mouseout")»
    await getButton.dispatchEvent("mouseout")
     🟨Caveat: this will make the test not in real conditions
    
    */
    // * Alternative 3: use «.mouse.move(0, 0)» to move the mouse to the first corner of the page
    await page.mouse.move(0, 0)
    await expect(getData).toHaveText("Mouse hover: false")
  })
  test.skip("Click on the top left corner", async ({ page }) => {})
})
