/* This function check if all the element on some array is in another array */

export const compareTwoArr = ({
  realDataFromUI = [],
  dataToCompare = [],
}: {
  realDataFromUI: any[]
  dataToCompare: any[]
}): boolean => {
  if (
    realDataFromUI.length === 0 ||
    dataToCompare.length === 0 ||
    realDataFromUI.length !== dataToCompare.length
  ) {
    return false
  }

  const arr1AllElementsLowerCase = realDataFromUI.map((x) => {
    if (typeof x === "string") {
      return x.toLowerCase()
    }

    return x
  })

  const arr2AllElementsLowerCase = dataToCompare.map((x) => {
    if (typeof x === "string") {
      return x.toLowerCase()
    }

    return x
  })

  const allElementsExist = arr1AllElementsLowerCase.every((element) => {
    if (element) {
      return arr2AllElementsLowerCase.includes(element)
    }

    return false
  })

  return allElementsExist
}
