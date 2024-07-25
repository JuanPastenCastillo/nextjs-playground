import { useEffect, useRef, useState } from "react"
import { dataSelectedUtil } from "./dataSelectedUtil"
import styles from "./editorCSS.module.css"

let ID_COUNTER = new Date()
export const Editor = () => {
  const [content, setContent] = useState("Type here...")

  const handleChange = (event) => {
    setContent(event.target.value)
  }

  function reapplySelection(selection) {
    // Create a new Range object
    let range = document.createRange()

    // Set the range to the stored selection
    range.setStart(selection.anchorNode, selection.anchorOffset)
    range.setEnd(selection.focusNode, selection.focusOffset)

    // Clear any existing selections
    selection.removeAllRanges()

    // Add the new range to the selection
    selection.addRange(range)
  }
  /* 
  !FH0
  Example on how to work:
  
  - If the text selected doesn't have bold, apply bold
  - If the text selected have bold, doesn't apply bold
  - If the text selected some part have bold and the other part doesn't, apply bold to everyone without duplication
  
  */

  const handleToBold = (e) => {
    /* 
    !FH0
    - Avoid nesting HTML elements
    - Make a toggle bold
    */

    if (
      e.type === "click" ||
      (e.code === "KeyB" && e.key === "b" && e.type === "keydown" && e.ctrlKey)
    ) {
      e.preventDefault()
      let selection = window.getSelection()
      if (selection.toString() === "") return

      /*
      let cloned = selection.getRangeAt(0).cloneContents()
      let textWithTags = Array.from(cloned.childNodes).map((x) => {
        if (x.nodeType === 1) {
          return x.outerHTML
        }

        if (x.nodeType === 3) {
          return x.nodeValue
        }
      })

      // console.log('textWithTags:', textWithTags)

      let { theStyles } = dataSelectedUtil({
        whichPress: "bold",
        selection,
      })

      // console.log("theStyles:", theStyles)

      let theOuterHTML =
        selection?.focusNode?.classList?.contains(`${styles.editor}`) ||
        selection?.focusNode?.outerHTML === undefined
          ? null
          : selection.focusNode.outerHTML

      let toDOM = theOuterHTML || textWithTags.join("")
      // console.log("toDOM:", toDOM)

      let elementHaveID = selection.anchorNode.id?.startsWith("span-")
      // console.log("elementHaveID:", elementHaveID)

      let uniqueId = `span-${ID_COUNTER++}`
      let textWithTagsFormatted = `<span class="${theStyles}" id="${uniqueId}">${toDOM}</span>`

      document.execCommand("insertHTML", false, textWithTagsFormatted)

      // selection.setBaseAndExtent(
      //   selection.anchorNode,
      //   0,
      //   selection.focusNode,
      //   selection.focusOffset,
      // )

      let spanElement = document.querySelector(`#${uniqueId}`)
      let newRange = document.createRange()
      newRange.selectNodeContents(spanElement)
      selection.removeAllRanges()
      selection.addRange(newRange)
      */

      let cloned = selection.getRangeAt(0).cloneContents()

      let textWithTags = Array.from(cloned.childNodes).map((x) => {
        if (x.nodeType === 1) {
          // return x.outerHTML
          // let cloned = x.childNodes.cloneContents()
          // console.log("cloned:", cloned)
          let theChildNodes = Array.from(x.childNodes)

          if (theChildNodes.length > 1) {
            return x.outerHTML
          }

          if (selection.focusNode?.classList?.contains(`${styles.editor}`)) {
            /* Prevent the nesting when the user click more times when the text keep selected after the to24px style */
            return x.outerHTML
          }

          let theText = x.textContent
          let theTag = x.tagName.toLowerCase()
          let theClasses = x.classList.value

          return `<${theTag} class="${theClasses}">${theText}</${theTag}>`
        }

        if (x.nodeType === 3) {
          return x.nodeValue
        }
      })

      let elementHaveID = selection.anchorNode.id?.startsWith("span-")

      let actualID = selection.anchorNode.id

      let ID_SUMMED = !elementHaveID ? `span-${ID_COUNTER++}` : actualID

      let theOuterHTML =
        selection?.focusNode?.classList?.contains(`${styles.editor}`) ||
        selection?.focusNode?.outerHTML === undefined
          ? null
          : selection.focusNode.outerHTML

      let the24pxStyle = new RegExp(styles.bold)
      let parentHave24pxStyle = Array.from(cloned.childNodes)

      const actualTextWithTagsHave24pxStyle = textWithTags
        .filter((x) => x.trim() !== "")
        .every((x) => the24pxStyle.test(x))

      if (actualTextWithTagsHave24pxStyle) {
        return
      }

      let toDOM = theOuterHTML || textWithTags.join("")

      let { theStyles } = dataSelectedUtil({
        whichPress: "bold",
        selection,
      })

      let textWithTagsFormatted = `<span class="${theStyles}" id="${ID_SUMMED}">${toDOM}</span>`

      // console.log("selection:", selection)
      document.execCommand("insertHTML", false, textWithTagsFormatted)

      // console.log("ID_SUMMED:", ID_SUMMED)
      let spanElement = document.querySelector(`#${ID_SUMMED}`)
      let newRange = document.createRange()
      newRange.selectNodeContents(spanElement)
      selection.removeAllRanges()
      selection.addRange(newRange)
    }
  }

  const handleToItalic = (e) => {
    if (
      e.type === "click" ||
      (e.code === "KeyI" && e.key === "i" && e.type === "keydown" && e.ctrlKey)
    ) {
      e.preventDefault()
      let selection = window.getSelection()

      // let cloned = selection.getRangeAt(0).cloneContents()
      // let textWithTags = Array.from(cloned.childNodes).map((x) => {
      //   if (x.nodeType === 1) {
      //     /*
      //     let replaceText = x.outerHTML.replace(
      //       x.outerText,
      //       `<i>${x.outerText}</i>`,
      //     )

      //     return replaceText
      //     */

      //     return x.outerHTML
      //   }

      //   if (x.nodeType === 3) {
      //     // return `<i>${x.nodeValue}</i>`
      //     return x.nodeValue
      //   }
      // })

      let { theStyles } = dataSelectedUtil({
        whichPress: "italic",
        selection,
      })

      let textWithTagsFormatted = `<span class="${theStyles}">${selection.toString()}</span>`

      document.execCommand("insertHTML", false, textWithTagsFormatted)

      selection.setBaseAndExtent(
        selection.anchorNode,
        0,
        selection.focusNode,
        selection.focusOffset,
      )
    }
  }

  const handleToUnderline = (e) => {
    if (
      e.type === "click" ||
      (e.code === "KeyU" && e.key === "u" && e.type === "keydown" && e.ctrlKey)
    ) {
      e.preventDefault()
      let selection = document.getSelection()
      // console.log("selection:", selection, selection.getRangeAt(0))

      let cloned = selection.getRangeAt(0).cloneContents()
      // console.log("cloned:", cloned)

      // let textWithTags = Array.from(cloned.childNodes).map((x) => {
      //   if (x.nodeType === 1) {
      //     let replaceText = x.outerHTML.replace(
      //       x.outerText,
      //       `<u>${x.outerText}</u>`,
      //     )

      //     return replaceText
      //   }

      //   if (x.nodeType === 3) {
      //     return `<u>${x.nodeValue}</u>`
      //   }
      // })
      // console.log("textWithTags:", textWithTags)

      /* 
      !FH0
      - Start looking up the three with target.parentElement, if at some point it encounter a nodeType === 1 && tagName === "DIV" stop, and use everything it encounter to re made the HTML based on class styles
      - If a class is repeated, do not put it in the final string
      - Maybe it should take a look element by element to know if it have the corresponding HTML tag. With this said: it should change the behavior from classes to HTML tags. Other optin is apply element by element the corresponding class
      */

      let textWithTags = Array.from(cloned.childNodes).map((x) => {
        if (x.nodeType === 1) {
          // let replaceText = x.outerHTML.replace(x.outerText, `${x.outerText}`)
          return x.outerHTML
        }

        if (x.nodeType === 3) {
          return x.nodeValue
        }
      })

      // console.log("textWithTags:", textWithTags)

      let textWithTagsFormatted = `<span class="${
        styles.underline
      }">${textWithTags.join("")}</span>`

      document.execCommand("insertHTML", false, textWithTagsFormatted)

      // document.execCommand("insertHTML", false, textWithTags.join(""))

      // console.log("selection:", selection)
      // selection.setBaseAndExtent(
      //   selection.anchorNode,
      //   0,
      //   selection.focusNode,
      //   selection.focusOffset,
      // )
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleToBold)
    document.addEventListener("keydown", handleToItalic)
    document.addEventListener("keydown", handleToUnderline)
    return () => {
      document.removeEventListener("keydown", handleToBold)
      document.removeEventListener("keydown", handleToItalic)
      document.removeEventListener("keydown", handleToUnderline)
    }
  }, [])

  /*
  useEffect(() => {
    const handleSelectChange = (e) => {
      let selection = window.getSelection()
      console.log("e:", e, selection)
    }

    document.addEventListener("selectionchange", handleSelectChange)

    return () => {
      document.removeEventListener("selectionchange", handleSelectChange)
    }
  }, [])
  */

  const handleToH1 = (e) => {
    e.preventDefault()
    let selection = window.getSelection()
    let stringSelected2 = selection.toString()

    let { theStyles } = dataSelectedUtil({
      whichPress: "h1",
      selection,
    })

    let wrappedselection =
      `<h1 class="${theStyles}" >` + stringSelected2 + "</h1>"

    document.execCommand("insertHTML", false, wrappedselection)
  }

  useEffect(() => {
    function onContentEditableLinksMouseDown(e) {
      let getParentA = e.target.closest("a")

      if (getParentA !== null && getParentA.href && e.button === 0) {
        window.open(getParentA.href, "_blank")
      }
    }
    document.addEventListener("mousedown", onContentEditableLinksMouseDown)
    return () => {
      document.removeEventListener("mousedown", onContentEditableLinksMouseDown)
    }
  }, [])

  const [HTMLToRender, setHTMLToRender] = useState()

  const handlePaste = async (e) => {
    e.preventDefault()

    /* 
    !FH0
    Take in mind the user can copy not only a link but also:
      - ✅bold
      - ✅italic
      - ✅underline
      - font size
      - list format (left, right, center)
      - order and unorder list
    */

    let dataCopiedHaveHTMLOnIt = e.clipboardData.getData("text/html")
    let parser = new DOMParser()
    // console.log("parser:", parser)
    let doc = parser.parseFromString(dataCopiedHaveHTMLOnIt, "text/html")
    // console.log("doc:", doc)
    let selection = window.getSelection()
    let stringSelected = selection.toString()

    if (dataCopiedHaveHTMLOnIt !== "" && doc.body.children.length !== 0) {
      let allHTMLString = ""

      Array.from(doc.body.childNodes).forEach((x, index) => {
        if (x.nodeType === 1) {
          return (allHTMLString += x.outerHTML)
        }

        if (x.nodeType === 3) {
          return (allHTMLString += x.nodeValue)
        }
      })

      document.execCommand("insertHTML", false, allHTMLString)
      return
    }

    let dataInClipboard = e.clipboardData.getData("Text")
    let isAValidURL = URL.canParse(dataInClipboard)

    if (stringSelected !== "" && !isAValidURL) {
      return
    }
    if (stringSelected === "" && !isAValidURL) {
      let wrappedselection = `<${HTMLToRender.tag} class="${styles.default}">${dataInClipboard}</${HTMLToRender.tag}>`

      document.execCommand("insertHTML", false, wrappedselection)
      return
    }

    let { theStyles } = dataSelectedUtil({
      whichPress: "link",
      selection,
    })

    // console.log("theStyles:", theStyles)

    let cloned = selection.getRangeAt(0).cloneContents()
    let textWithTags = Array.from(cloned.childNodes).map(
      ({ nodeType, outerHTML, nodeValue, outerText }) => {
        if (nodeType === 1) {
          return outerHTML
        }

        if (nodeType === 3) {
          return nodeValue
        }
      },
    )

    // console.log("textWithTags:", textWithTags)
    let textWithTagsFormatted = `<a target="_blank" href="${dataInClipboard}" class="${
      styles.link
    }">${
      textWithTags.length !== 0 ? textWithTags.join("") : dataInClipboard
    }</a>`

    if (stringSelected === "" && isAValidURL) {
      // let wrappedselection = `<a target="_blank" href="${dataInClipboard}" class="${styles.link}">${textWithTags}</a>`

      document.execCommand("insertHTML", false, textWithTagsFormatted)

      return
    }

    if (stringSelected !== "" && isAValidURL) {
      // let wrappedselection = `<a target="_blank" href="${dataInClipboard}" class="${styles.link}">${stringSelected}</a>`

      document.execCommand("insertHTML", false, textWithTagsFormatted)
      return
    }
  }

  const handleFont16px = (e) => {
    e.preventDefault()
    let selection = window.getSelection()
    let stringSelected2 = selection.toString()

    let { theStyles } = dataSelectedUtil({
      whichPress: "to16px",
      selection,
    })

    let wrappedselection = `<${HTMLToRender.tag} ${HTMLToRender.props} class="${theStyles}">${stringSelected2}</${HTMLToRender.tag}>`

    document.execCommand("insertHTML", false, wrappedselection)
    setHTMLToRender()
  }

  const handleFont24px = async (e) => {
    e.preventDefault()
    /* 
    !FH0
    - If the text already have this style do nothing
    - Eliminate the previous ID if a new style is applied
    - Prevent the nesting when the user click more times when the text keep selected after the to24px style
    */

    let selection = window.getSelection()
    if (selection.toString() === "") return

    let cloned = selection.getRangeAt(0).cloneContents()

    let textWithTags = Array.from(cloned.childNodes).map((x) => {
      if (x.nodeType === 1) {
        // return x.outerHTML
        // let cloned = x.childNodes.cloneContents()
        // console.log("cloned:", cloned)
        let theChildNodes = Array.from(x.childNodes)

        if (theChildNodes.length > 1) {
          return x.outerHTML
        }

        if (selection.focusNode?.classList?.contains(`${styles.editor}`)) {
          /* Prevent the nesting when the user click more times when the text keep selected after the to24px style */
          return x.outerHTML
        }

        let theText = x.textContent
        let theTag = x.tagName.toLowerCase()
        let theClasses = x.classList.value

        return `<${theTag} class="${theClasses}">${theText}</${theTag}>`
      }

      if (x.nodeType === 3) {
        return x.nodeValue
      }
    })

    let elementHaveID = selection.anchorNode.id?.startsWith("span-")

    let actualID = selection.anchorNode.id

    let ID_SUMMED = !elementHaveID ? `span-${ID_COUNTER++}` : actualID

    let theOuterHTML =
      selection?.focusNode?.classList?.contains(`${styles.editor}`) ||
      selection?.focusNode?.outerHTML === undefined
        ? null
        : selection.focusNode.outerHTML

    let the24pxStyle = new RegExp(styles.to24px)
    let parentHave24pxStyle = Array.from(cloned.childNodes)

    const actualTextWithTagsHave24pxStyle = textWithTags
      .filter((x) => x.trim() !== "")
      .every((x) => the24pxStyle.test(x))

    if (actualTextWithTagsHave24pxStyle) {
      return
    }

    let toDOM = theOuterHTML || textWithTags.join("")

    let { theStyles } = dataSelectedUtil({
      whichPress: "to24px",
      selection,
    })

    let textWithTagsFormatted = `<span class="${styles.to24px}" id="${ID_SUMMED}">${toDOM}</span>`

    // console.log("selection:", selection)
    document.execCommand("insertHTML", false, textWithTagsFormatted)

    // console.log("ID_SUMMED:", ID_SUMMED)
    let spanElement = document.querySelector(`#${ID_SUMMED}`)
    let newRange = document.createRange()
    newRange.selectNodeContents(spanElement)
    selection.removeAllRanges()
    selection.addRange(newRange)

    // selection.setBaseAndExtent(
    //   selection.anchorNode,
    //   0,
    //   selection.focusNode,
    //   selection.focusOffset,
    // )

    /*
    document.execCommand("insertHTML", false, textWithTagsFormatted)

    let spanElement = document.querySelector(`#${uniqueId}`)
    let newRange = document.createRange()
    newRange.selectNodeContents(spanElement)
    selection.removeAllRanges()
    selection.addRange(newRange)
    */

    /*
    console.log(
      "selection:",
      selection,
      selection.toString(),
      textWithTagsFormatted,
      cloned,
      textWithTags,
    )
    */

    // selection.setBaseAndExtent(
    //   selection.anchorNode,
    //   0,
    //   selection.focusNode,
    //   selection.focusOffset,
    // )

    // if (selection?.focusNode.contentEditable) {

    //   let cloned = selection.getRangeAt(0).cloneContents()
    //   let textWithTags = Array.from(cloned.childNodes).map((x) => {
    //     if (x.nodeType === 1) {
    //       // let replaceText = x.outerHTML.replace(x.outerText, `${x.outerText}`)
    //       return x.outerHTML
    //     }

    //     if (x.nodeType === 3) {
    //       return x.nodeValue
    //     }
    //   })

    //   console.log("textWithTags:", textWithTags, textWithTags.join(" "))

    //   let textWithTagsFormatted = `<span class="${
    //     styles.to24px
    //   }">${textWithTags.join("")}</span>`

    //   console.log("💜textWithTagsFormatted:", textWithTagsFormatted)

    //   document.execCommand("insertHTML", false, textWithTagsFormatted)

    //   // selection.setBaseAndExtent(
    //   //   selection.anchorNode,
    //   //   0,
    //   //   selection.focusNode,
    //   //   selection.focusOffset,
    //   // )

    //   return
    // }

    // console.log("textWithTags:", textWithTags)

    /*
    let { theStyles } = dataSelectedUtil({
      whichPress: "to24px",
      selection,
    })

    console.log("💙", HTMLToRender, theStyles, selection.toString())

    let textWithTagsFormatted = `<span class="${theStyles}">${selection.toString()}</span>`

    document.execCommand("insertHTML", false, textWithTagsFormatted)

    selection.setBaseAndExtent(
      selection.anchorNode,
      0,
      selection.focusNode,
      selection.focusOffset,
    )
    */

    /*
    let wrappedselection = `<${HTMLToRender.tag} ${HTMLToRender.props} class="${theStyles}">${stringSelected2}</${HTMLToRender.tag}>`

    document.execCommand("insertHTML", false, wrappedselection)
    setHTMLToRender()
    */
  }

  const handleFont64px = (e) => {
    e.preventDefault()
    let selection = window.getSelection()
    if (selection.toString() === "") return
    // let stringSelected2 = selection.toString()

    /*
    let { theStyles } = dataSelectedUtil({
      whichPress: "to64px",
      selection,
    })

    let textWithTagsFormatted = `<span class="${theStyles}">${selection.toString()}</span>`

    document.execCommand("insertHTML", false, textWithTagsFormatted)

    selection.setBaseAndExtent(
      selection.anchorNode,
      0,
      selection.focusNode,
      selection.focusOffset,
    )
    */

    let cloned = selection.getRangeAt(0).cloneContents()
    let textWithTags = Array.from(cloned.childNodes).map((x) => {
      if (x.nodeType === 1) {
        // let replaceText = x.outerHTML.replace(x.outerText, `${x.outerText}`)
        return x.outerHTML
      }

      if (x.nodeType === 3) {
        return x.nodeValue
      }
    })

    // console.log("textWithTags:", textWithTags.join(" "))

    let textWithTagsFormatted = `<span class="${
      styles.to64px
    }">${textWithTags.join("")}</span>`

    document.execCommand("insertHTML", false, textWithTagsFormatted)

    /*
    let wrappedselection = `<${HTMLToRender.tag} ${HTMLToRender.props} class="${theStyles}">${stringSelected2}</${HTMLToRender.tag}>`

    document.execCommand("insertHTML", false, wrappedselection)
    setHTMLToRender()
    */
  }

  const handleSelectExecCommand = (e) => {
    /* This method allow to know which HTMLElement is selected: anchor tag or other */
    let whichHTMLElementShouldRender =
      window.getSelection().focusNode.parentNode.tagName

    // console.log("whichHTMLElementShouldRender:", whichHTMLElementShouldRender)

    // console.log("window.getSelection():", window.getSelection())

    /* 
    !FH0 
    Stop make anything if nothing is selected
     */
    if (whichHTMLElementShouldRender === "A") {
      let dataToPass = `target="_blank" href=${
        window.getSelection().focusNode.parentNode.href
      }`

      // console.log("dataToPass:", dataToPass)

      setHTMLToRender({
        tag: whichHTMLElementShouldRender.toLowerCase(),
        props: dataToPass,
      })
    } else {
      setHTMLToRender({ tag: whichHTMLElementShouldRender.toLowerCase() })
    }
  }

  const handleOnSelect = ({ e }) => {
    // console.log("e:", e)
    // const selection = e.target.value.substring(
    //   e.target.selectionStart,
    //   e.target.selectionEnd,
    // )
    // setActualSelection(selection)
  }

  const textRef = useRef(null)

  useEffect(() => {
    // Assuming you have a function to insert the HTML
    // insertHTML();

    // Focus on the container element after it's inserted
    if (textRef.current) {
      // console.log("textRef.current:", textRef.current)
    }
  }, [textRef])

  return (
    <div>
      <div
        suppressContentEditableWarning
        contentEditable
        spellCheck={false}
        onChange={handleChange}
        onPaste={handlePaste}
        onSelect={handleSelectExecCommand}
        className={styles.editor}
        ref={textRef}>
        {content}
      </div>

      <div>
        <p>With document.execCommand("insertHTML", false, wrappedselection)</p>
        <button onClick={handleToBold}>Bold</button>
        <button onClick={handleToItalic}>Italic</button>
        <button onClick={handleToUnderline}>underline</button>
        <select>
          <option>Size</option>
          <option>Only 24 and 64 are working</option>
          <option>16px</option>
          <option onClick={handleFont24px}>24px</option>
          <option>48px</option>
          <option onClick={handleFont64px}>64px</option>
        </select>

        <button onClick={handleFont24px}>24px</button>
        <button onClick={handleFont64px}>64px</button>

        {/* <button onClick={handleFont16px}>To 16px</button>
        <button onClick={handleFont24px}>To 24px</button>
        <button onClick={handleFont64px}>To 64px</button> */}
      </div>

      {/* <Sanitize_Editor /> */}
    </div>
  )
}

/* 

Reference:
https://www.w3.org/TR/selection-api/
*/
