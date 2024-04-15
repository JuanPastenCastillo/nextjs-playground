import { useEffect, useState } from "react"
import { dataSelectedUtil } from "./dataSelectedUtil"
import styles from "./editorCSS.module.css"

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

  const handleToBold = (e) => {
    if (
      e.type === "click" ||
      (e.code === "KeyB" && e.key === "b" && e.type === "keydown" && e.ctrlKey)
    ) {
      e.preventDefault()
      let selection = window.getSelection()
      // console.log("selection:", selection)
      let cloned = selection.getRangeAt(0).cloneContents()
      // console.log("cloned:", cloned)
      let textWithTags = Array.from(cloned.childNodes).map((x) => {
        if (x.nodeType === 1) {
          // let replaceText = x.outerHTML.replace(x.outerText, `${x.outerText}`)
          return x.outerHTML
        }

        if (x.nodeType === 3) {
          return x.nodeValue
        }
      })

      let textWithTagsFormatted = `<span class="${
        styles.bold
      }">${textWithTags.join("")}</span>`

      document.execCommand("insertHTML", false, textWithTagsFormatted)

      selection.setBaseAndExtent(
        selection.anchorNode,
        0,
        selection.focusNode,
        selection.focusOffset,
      )
    }
  }

  const handleToItalic = (e) => {
    if (
      e.type === "click" ||
      (e.code === "KeyI" && e.key === "i" && e.type === "keydown" && e.ctrlKey)
    ) {
      e.preventDefault()
      let selection = window.getSelection()

      let cloned = selection.getRangeAt(0).cloneContents()

      /* 
        !FH0 if:
          - One element do not have the ITALIC, apply it to everyone but without duplication
          - Everyone have the ITALIC applied, remove it for everyone
          - ✅Do not remove bold or underline if another italic is already applied
        */

      let textWithTags = Array.from(cloned.childNodes).map((x) => {
        if (x.nodeType === 1) {
          let replaceText = x.outerHTML.replace(
            x.outerText,
            `<i>${x.outerText}</i>`,
          )

          return replaceText
        }

        if (x.nodeType === 3) {
          return `<i>${x.nodeValue}</i>`
        }
      })

      document.execCommand("insertHTML", false, textWithTags.join(""))

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
      console.log("cloned:", cloned)

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

      console.log("textWithTags:", textWithTags)

      let textWithTagsFormatted = `<span class="${
        styles.underline
      }">${textWithTags.join("")}</span>`

      document.execCommand("insertHTML", false, textWithTagsFormatted)

      // document.execCommand("insertHTML", false, textWithTags.join(""))

      console.log("selection:", selection)
      selection.setBaseAndExtent(
        selection.anchorNode,
        0,
        selection.focusNode,
        selection.focusOffset,
      )
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
    console.log("parser:", parser)
    let doc = parser.parseFromString(dataCopiedHaveHTMLOnIt, "text/html")
    console.log("doc:", doc)
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

    console.log("textWithTags:", textWithTags)
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

  const handleFont24px = (e) => {
    e.preventDefault()
    let selection = window.getSelection()
    let stringSelected2 = selection.toString()

    let { theStyles } = dataSelectedUtil({
      whichPress: "to24px",
      selection,
    })

    let wrappedselection = `<${HTMLToRender.tag} ${HTMLToRender.props} class="${theStyles}">${stringSelected2}</${HTMLToRender.tag}>`

    document.execCommand("insertHTML", false, wrappedselection)
    setHTMLToRender()
  }

  const handleFont64px = (e) => {
    e.preventDefault()
    let selection = window.getSelection()
    let stringSelected2 = selection.toString()

    let { theStyles } = dataSelectedUtil({
      whichPress: "to64px",
      selection,
    })

    // console.log("theStyles:", theStyles)
    // console.log()

    let wrappedselection = `<${HTMLToRender.tag} ${HTMLToRender.props} class="${theStyles}">${stringSelected2}</${HTMLToRender.tag}>`

    document.execCommand("insertHTML", false, wrappedselection)
    setHTMLToRender()
  }

  // console.log("HTMLToRender:", HTMLToRender)

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

  const [changeState, setChangeState] = useState("")
  const [actualSelection, setActualSelection] = useState("")

  const handleChangeState = ({ event }) => {
    setChangeState(event.target.value)
  }

  const handleOnSelect = ({ e }) => {
    const selection = e.target.value.substring(
      e.target.selectionStart,
      e.target.selectionEnd,
    )
    setActualSelection(selection)
  }

  return (
    <div className={styles.default}>
      <div
        suppressContentEditableWarning
        contentEditable
        spellCheck={false}
        onChange={handleChange}
        onPaste={handlePaste}
        onSelect={handleSelectExecCommand}
        className={styles.editor}>
        {content}
      </div>

      <div>
        <p>With document.execCommand("insertHTML", false, wrappedselection)</p>
        <button onClick={handleToBold}>Bold</button>
        <button onClick={handleToItalic}>Italic</button>
        <button onClick={handleToUnderline}>underline</button>
        <select>
          <option>Size </option>
          <option>16px</option>
          <option>24px</option>
          <option>48px</option>
          <option>64px</option>
        </select>

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
