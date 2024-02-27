import { compareTwoArr } from "@/utils/compareTwoArr"
import { render, screen } from "@testing-library/react"
import { describe, expect, expectTypeOf, it } from "vitest"
import { INDEX_StaticToTest } from "../INDEX_StaticToTest"

describe("Static Test, only read", (ctx_describe) => {
  let getRender = render(<INDEX_StaticToTest />)

  it("Suggested role", (ctx) => {
    /* screen.getByRole("which one?") // This display all the roles suggested for all the HTML  */
  })

  it("is a a function", (ctx) => {
    expectTypeOf(INDEX_StaticToTest).toBeFunction()
  })

  it("checking titles", (ctx_it) => {
    for (let index = 0; index < 6; index++) {
      expect(screen.getByRole("heading", { level: index + 1 })).toBeTruthy()
    }

    expect(screen.getByText("This is a h1")).toBeTruthy()
    expect(screen.getByText("This is a h2")).toBeTruthy()
    expect(screen.getByText("This is a h3")).toBeTruthy()
    expect(screen.getByText("This is a h4")).toBeTruthy()
    expect(screen.getByText("This is a h5")).toBeTruthy()
    expect(screen.getByText("This is a h6")).toBeTruthy()
  })

  describe("Checking LI Elements", (ctx_describe) => {
    const allLiElements = getRender.getAllByRole("listitem")

    it("All LI Elements are there. The order doesn't matter", (ctx_it) => {
      const liTextContent = allLiElements.map((li) => li.textContent)

      let toCompareAllLI = [
        "Li Element: C",
        "Li Element: 1",
        "Li Element: 2",
        "Li Element: 3",
        "Li Element: 1",
        "Li Element: 2",
        "Li Element: A",
        "Li Element: B",
      ]

      const checkTwoArrs = compareTwoArr({
        realDataFromUI: liTextContent,
        dataToCompare: toCompareAllLI,
      })

      expect(checkTwoArrs).toBeTruthy()
    })

    it("Check LI inside UL only", (ctx) => {
      let filtered = allLiElements.filter((x) => {
        return Object.values(x)[0].type === "ul"
      })

      const textContent = filtered.map((x) => x.textContent)

      let theDataArrExpected = [
        "Li Element: 1Li Element: 2Li Element: 3",
        "Li Element: 1Li Element: 2",
      ]

      const checkTwoArrs = compareTwoArr({
        realDataFromUI: textContent,
        dataToCompare: theDataArrExpected,
      })

      expect(checkTwoArrs).toBeFalsy()
    })

    it(`Check LI with some custom attribute`, () => {
      const ulElement = getRender.getByTestId("LI_options")

      let getAllLIElementsFromUI = Object.values(ulElement)[1].children.map(
        (x: any) => x.props.children,
      )

      const expectedElementsOnUI = [
        "Li Element: 3",
        "Li Element: 2",
        "Li Element: 1",
      ]

      const checkTwoArrs = compareTwoArr({
        realDataFromUI: getAllLIElementsFromUI,
        dataToCompare: expectedElementsOnUI,
      })

      expect(checkTwoArrs).toBeTruthy()
    })
  })

  describe("Testing Links", (ctx_describe) => {
    const getAllLinks = getRender.getAllByRole("link")

    it("correct ammount of links", (ctx_it) => {
      expect(getAllLinks.length).toEqual(2)
    })

    const textContent_1 = getAllLinks[0]
    const textContent_2 = getAllLinks[1]
    it("Correct content on Links", (ctx) => {
      expect(
        textContent_1.textContent ===
          "Some link to duckduckgo with anchor tag element",
      ).toBeTruthy()
      expect(
        textContent_2.textContent ===
          "Some link to duckduckgo with NEXTJS 13 element",
      ).toBeTruthy()
    })

    it("Links have the correct attributes", (ctx) => {
      const textContent_1_obj = {
        href: textContent_1.getAttribute("href"),
        target: textContent_1.getAttribute("target"),
        referrerPolicy: textContent_1.getAttribute("referrerPolicy"),
      }

      expect(textContent_1_obj.href).toBe("https://duckduckgo.com/")
      expect(textContent_1_obj.target).toBe("_blank")
      expect(textContent_1_obj.referrerPolicy).toBe("no-referrer")

      const textContent_2_obj = {
        href: textContent_2.getAttribute("href"),
        target: textContent_2.getAttribute("target"),
        referrerPolicy: textContent_2.getAttribute("referrerPolicy"),
      }

      expect(textContent_2_obj.href).toBe("https://bing.com")
      expect(textContent_2_obj.target).toBe("_blank")
      expect(textContent_2_obj.referrerPolicy).toBe("no-referrer")
    })
  })

  describe("Images test", (ctx_describe) => {
    it("Ammount of images expected", (ctx_it) => {
      const getAllImages = getRender.getAllByRole("img")
      expect(getAllImages.length).toEqual(5)
    })

    it("Check Pigeon image", (ctx) => {
      const getPigeonHTML = getRender.getByAltText(
        "some image of a Pigeon, html tag",
      )
      expect(getPigeonHTML).toBeDefined()
    })

    it("Pigeon Image have the correct alt text", (ctx) => {
      const getPigeonNEXT = getRender.getByAltText(
        "some image of a Pigeon, nextjs component",
      )
      expect(getPigeonNEXT).toBeDefined()
    })

    it("Norwegian flag exist", (ctx) => {
      const norwayFlag = getRender.getByAltText("Norway flag")
      expect(norwayFlag).toBeDefined()
    })

    it("Correct ammount of Norwegian place images", (ctx) => {
      const norwayLandscape = getRender.getAllByAltText(
        "some image of a Norwegian place",
      )

      expect(norwayLandscape.length).toEqual(2)
    })

    it("Getting an specific image", (ctx) => {
      const norwaySpecialImage = getRender.getByTestId("special image")
      expect(norwaySpecialImage).toBeDefined()
    })
  })

  describe("Testing Inputs", (ctx_describe) => {
    it("ammount of inputs are correct", (ctx_it) => {
      const inputElements = getRender.getAllByTestId("input")
      expect(inputElements.length).toBe(24)
    })

    it("input: button", (ctx) => {
      const getInputButton = getRender.getByDisplayValue(
        "like button in a HTML input tag",
      )

      expect(getInputButton).toBeDefined()
    })

    describe("input: checkbox", (ctx_describe) => {
      it(`The correct checkbox inside some specific label:
          check the father and from there the children
          is teste by their attributes
          💛Careful: this is a way to test the implementation`, (ctx_it) => {
        const getFirstLabel = getRender.getByTestId("first_label")

        const { type, ...rest } =
          Object.values(getFirstLabel)[1].children[1].props

        const allCorrect =
          type === "checkbox" && rest["data-testid"] === "input"

        expect(allCorrect).toBeTruthy()
      })

      it(`Correct checkbox: color → 
          — All input with no roles should be wrapped with a label tag
          — Plus, here you can check this input have the correct attributes
          💛Careful: this is a way to test the implementation`, (ctx) => {
        const getInputColor = getRender.getByTestId("parent of color")

        const { type, name, value, ...rest } =
          Object.values(getInputColor)[1].children[1].props

        // With this you can check all attributes of the JSX element
        const allCorrect =
          rest["data-testid"] === "input" &&
          type === "color" &&
          name === "head" &&
          value === "#e66465"

        expect(allCorrect).toBeTruthy()
      })
    })

    it("Correct input without role: «aria-label» should be used", (ctx) => {
      const dateInput = getRender.getByLabelText("date_input_here")

      expect(dateInput).toBeDefined()
    })

    it("All textboxes", (ctx) => {
      const getAllTextboxes = getRender.getAllByRole("textbox")

      expect(getAllTextboxes.length).toBe(6)
    })

    it("target one specific input: email", (ctx) => {
      const emailInput = getRender.getByLabelText("email_input")

      expect(emailInput).toBeDefined()
    })

    it(`Check attributes to input: color
        💛Careful: this is a way to test the implementation`, (ctx) => {
      const colorInput = getRender.getByLabelText("color_input_here")

      const { name, type, value, ...rest } = Object.values(colorInput)[1]

      const allCorrect =
        name === "head" &&
        type === "color" &&
        value === "#e66465" &&
        rest["data-testid"] === "input" &&
        rest["aria-label"] === "color_input_here"

      expect(allCorrect).toBeTruthy()
    })
  })

  describe("Aside Testing", (ctx_describe) => {
    it("ammount of asides", (ctx_it) => {
      const getAside = getRender.getAllByRole("complementary")

      expect(getAside.length).toBe(2)
    })

    it("Some specific aside: data-testid", (ctx) => {
      const getSpecificAside = getRender.getByTestId("specific aside")

      expect(getSpecificAside).toBeDefined()
    })

    it("Some specific aside: getByText", (ctx) => {
      const getSpecificAside = getRender.getByText(/second aside/i)

      expect(getSpecificAside).toBeDefined()
    })
  })

  describe("Form Testing", (ctx_describe) => {
    it("label testing", (ctx_it) => {
      const getCorrectLabel = getRender.getByLabelText(/this is the label/i)

      expect(getCorrectLabel).toBeDefined()
    })

    it("input checkbox", (ctx) => {
      const getCorrectCheckbox = getRender.getByLabelText(
        "input checkbox inside form at the side of input",
      )

      expect(getCorrectCheckbox).toBeDefined()
    })
  })

  describe("Details Testing", (ctx_describe) => {
    it("detail exist", (ctx_it) => {
      const specificDetailExist = getRender.getByTestId("detail")

      expect(specificDetailExist).toBeDefined()
    })
    it("summary exist", (ctx_it) => {
      const specificSummaryExist = getRender.getByTestId("summary")

      expect(specificSummaryExist).toBeDefined()
    })

    it("Text of detail", (ctx) => {
      const getTextOfDetail = getRender.getByText(
        "This is displayed on open without any on it",
      )

      expect(getTextOfDetail).toBeDefined()
    })
  })

  describe("Footer Testing", (ctx_describe) => {
    it("Specific footer", (ctx_it) => {
      const getCorrectFooter = getRender.getByTestId(
        "footer without article as father",
      )
      expect(getCorrectFooter).toBeDefined()
    })
  })
})
