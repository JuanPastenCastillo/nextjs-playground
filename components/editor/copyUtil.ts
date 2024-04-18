export async function copyTextToClipboard(text: any) {
  if ("clipboard" in navigator) {
    console.log("MODERN")

    return await navigator.clipboard.writeText(text)
  } else {
    console.log("OLDER")
    return document.execCommand("copy", true, text)
  }
}
