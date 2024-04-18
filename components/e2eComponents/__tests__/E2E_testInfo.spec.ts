import { expect, test } from "@playwright/test"

test.describe("Testing testInfo", () => {
  test("testInfo: fail()", async ({ page }, testInfo) => {
    let theCondition = true
    testInfo.fail(theCondition, "this should be false")

    expect(theCondition).toBe(false)
  })

  test("testInfo: fixme()", async ({ page }, testInfo) => {
    let theCondition = true
    testInfo.fixme(theCondition, "this should be false")

    expect(theCondition).toBe(false)
  })

  test("testInfo: console.log", async ({ page }, testInfo) => {
    // test.afterEach(async ({}, testInfo) => {
    //   console.log("✅ testInfo.status:", testInfo.status)
    // })

    console.log("annotations:", testInfo.annotations)
    console.log("attachments:", testInfo.attachments)
    console.log("column:", testInfo.column)
    console.log("line:", testInfo.line)
    console.log("config:", testInfo.config)
    console.log("duration:", testInfo.duration)
    console.log("error:", testInfo.error)
    console.log("expectedStatus:", testInfo.expectedStatus)
    console.log("status:", testInfo.status)
    console.log("file:", testInfo.file)
    console.log("fn:", testInfo.fn)
    console.log("outputDir:", testInfo.outputDir)
    console.log("parallelIndex:", testInfo.parallelIndex)
    console.log("project:", testInfo.project)
    console.log("repeatEachIndex:", testInfo.repeatEachIndex)
    console.log("retry:", testInfo.retry)
    console.log("snapshotDir:", testInfo.snapshotDir)
    /*
    console.log("tags:", testInfo?.tags) // Property 'tags' does not exist on type 'TestInfo'.ts(2339)
    */
    console.log("testId:", testInfo.testId)
    console.log("timeout:", testInfo.timeout)
    console.log("title:", testInfo.title)
    console.log("titlePath:", testInfo.titlePath)
    console.log("workerIndex:", testInfo.workerIndex)

    await expect(true).toBe(true)
  })
})
