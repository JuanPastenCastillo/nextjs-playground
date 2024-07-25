import styles from "./editorCSS.module.css"

export const dataSelectedUtil = ({ whichPress, selection = "" }) => {
  // let stringSelected = selection.toString()

  console.log("🐢selection:", selection)

  if (selection.type === "None") {
    return
  }
  // console.log("🚝selection:", selection)
  let getTheStyles = selection?.focusNode?.parentElement?.classList
  console.log(
    "💜getTheStyles:",
    getTheStyles,
    selection,
    selection?.focusNode.contentEditable,
  )

  let finalStyles =
    Array.from(getTheStyles).length === 0
      ? [styles.default]
      : Array.from(getTheStyles)

  console.log("🔰 FIRST finalStyles:", finalStyles)

  if (whichPress === "italic") {
    let alreadyHaveItalic = Array.from(getTheStyles).some(
      (x) => x === styles.italic,
    )

    // let theStyles = Object.values({
    //   italic: alreadyHaveItalic ? "" : styles.italic,
    //   default: styles.default,
    // }).join(" ")

    /*
    console.log("alreadyHaveItalic:", alreadyHaveItalic)
    console.log("finalStyles:", finalStyles)
    */
    if (!alreadyHaveItalic) {
      finalStyles.push(styles.italic)
    } else {
      const index = finalStyles.indexOf(styles.italic)
      console.log("index:", index)
      if (index !== -1) {
        finalStyles.splice(index, 1)
      }
    }
    // console.log("👀 ITALIC ADDED/REMOVED finalStyles:", finalStyles)

    // return {
    //   theStyles,
    //   stringSelected,
    // }
  }
  if (whichPress === "bold") {
    let alreadyHaveBold = Array.from(getTheStyles).some(
      (x) => x === styles.bold,
    )

    let theBoldStyle = new RegExp(styles.bold)
    console.log("theBoldStyle:", theBoldStyle)
    let alreadyHaveBold2 = theBoldStyle.test(selection.focusNode.outerHTML)

    /* 
    !FH Change "alreadyHaveBold2" on italic and underline
    */
    if (!alreadyHaveBold2) {
      finalStyles.push(styles.bold)
    } else {
      const index = finalStyles.indexOf(styles.bold)
      console.log("index:", index)
      if (index !== -1) {
        finalStyles.splice(index, 1)
      }
    }

    console.log("💫 BOLDADDEDfinalStyles:", finalStyles)

    // return {
    //   theStyles,
    //   stringSelected,
    // }
  }

  if (whichPress === "link") {
    finalStyles.push(styles.link)

    // return {
    //   theStyles,
    //   stringSelected,
    // }
  }

  if (whichPress === "to16px") {
    /*
    let alreadyHaveH1 = Array.from(getTheStyles).some(
      (x) => x === styles.to16px,
    )

    // let theStyles = Object.values({
    //   bold: alreadyHaveH1 ? "" : styles.bold,
    // }).join(" ")

    console.log("alreadyHaveH1:", alreadyHaveH1)
    console.log("finalStyles:", finalStyles)
    if (!alreadyHaveH1) {
      finalStyles.push(styles.to16px)
    } else {
      // const index = finalStyles.indexOf(styles.to16px)
      // if (index !== -1) {
      //   finalStyles.splice(index, 1)
      // }
      // let onlyOneCanStay = [
      //   styles.h1,
      //   styles.to16px,
      //   styles.to24px,
      //   styles.to64px,
      // ]
      // onlyOneCanStay.forEach((x) => {
      //   const index = finalStyles.indexOf(x)
      //   if (index !== -1) {
      //     finalStyles.splice(index, 1)
      //   }
      // })
    }
    */

    let onlyOneCanStay = [styles.to16px, styles.to24px, styles.to64px]

    onlyOneCanStay.forEach((x) => {
      const index = finalStyles.indexOf(x)
      if (index !== -1) {
        finalStyles.splice(index, 1)
      }
    })

    console.log("💘 to16px:", finalStyles)

    // return {
    //   theStyles,
    //   stringSelected,
    // }
  }
  if (whichPress === "to24px") {
    let alreadyHave24px = Array.from(getTheStyles).some(
      (x) => x === styles.to24px,
    )

    let the24pxStyle = new RegExp(styles.to24px)
    let alreadyHave24px2 = the24pxStyle.test(selection.focusNode.outerHTML)
    console.log("💜alreadyHave24px:", alreadyHave24px)

    if (!alreadyHave24px2) {
      let onlyOneCanStay = [styles.to16px, styles.to24px, styles.to64px]

      onlyOneCanStay.forEach((x) => {
        const index = finalStyles.indexOf(x)
        if (index !== -1) {
          finalStyles.splice(index, 1)
        }
      })

      finalStyles.push(styles.to24px)
    }

    // return {
    //   theStyles,
    //   stringSelected,
    // }
  }
  if (whichPress === "to64px") {
    /*
    let alreadyHaveH1 = Array.from(getTheStyles).some(
      (x) => x === styles.to64px,
    )

    // let theStyles = Object.values({
    //   bold: alreadyHaveH1 ? "" : styles.bold,
    // }).join(" ")

    console.log("alreadyHaveH1:", alreadyHaveH1)
    console.log("finalStyles:", finalStyles)
    if (!alreadyHaveH1) {
      finalStyles.push(styles.to64px)
    } else {
      let onlyOneCanStay = [
        styles.h1,
        styles.to16px,
        styles.to24px,
        styles.to64px,
      ]

      onlyOneCanStay.forEach((x) => {
        const index = finalStyles.indexOf(x)
        if (index !== -1) {
          finalStyles.splice(index, 1)
        }
      })
    }

    console.log("💘 BOLDADDEDfinalStyles:", finalStyles)
    */

    let alreadyHave64px = Array.from(getTheStyles).some(
      (x) => x === styles.to64px,
    )

    if (!alreadyHave64px) {
      let onlyOneCanStay = [styles.to16px, styles.to24px, styles.to64px]

      onlyOneCanStay.forEach((x) => {
        const index = finalStyles.indexOf(x)
        if (index !== -1) {
          finalStyles.splice(index, 1)
        }
      })
      finalStyles.push(styles.to64px)

      console.log("💘 to64px:", finalStyles)
    }

    // return {
    //   theStyles,
    //   stringSelected,
    // }
  }

  // if (whichPress === undefined) {
  //   let formatted = Object.values(finalStyles).join(" ")
  //   console.log("🟪formatted:", formatted)
  //   // console.log()

  //   return {
  //     theStyles: formatted,
  //   }
  // }

  // console.log("🐢 BEFORE FORMATfinalStyles:", finalStyles)
  let formatted = Object.values(finalStyles).join(" ")
  console.log("🟪formatted:", formatted)
  // console.log()

  return {
    theStyles: formatted,
  }
}
