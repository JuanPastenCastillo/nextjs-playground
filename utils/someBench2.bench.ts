import { bench, describe } from "vitest"

describe("Iterate an arr", () => {
  bench("with map", () => {
    let x: any = Array(1000)
      .fill("_")
      .map((x) => `${x}_99`)

    return x
  })

  bench("with loop", () => {
    let x: any = []
    for (let index = 0; index < 1000; index++) {
      x.push(index)
    }
    for (let index = 0; index < x.length; index++) {
      x[index] = `_`
    }

    for (let index = 0; index < x.length; index++) {
      x[index] = `${x[index]}_99`
    }

    return x
  })
})
