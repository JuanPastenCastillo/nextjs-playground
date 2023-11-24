let theName = "pages"

export const getAllRoutes = () => {
  // console.log("pagesDirectory:", pagesDirectory)

  // const pages = fs.readdirSync(pagesDirectory)

  const routes: any[] = []

  // pages.forEach((page) => {
  //   if (page.startsWith("[")) return // Ignore brackets

  //   const filePath = path.join(pagesDirectory, page)
  //   const isDirectory = fs.statSync(filePath).isDirectory()

  //   if (isDirectory) {
  //     const nestedPages = fs.readdirSync(filePath)
  //     nestedPages.forEach((nestedPage) => {
  //       const nestedFilePath = path.join(filePath, nestedPage)
  //       const isNestedDirectory = fs.statSync(nestedFilePath).isDirectory()

  //       if (!isNestedDirectory) {
  //         const route = `/${page}/${nestedPage}`
  //         routes.push(route)
  //       }
  //     })
  //   } else {
  //     if (!page.endsWith(".js") && !page.endsWith(".jsx")) return

  //     const route = `/${page}`
  //     routes.push(route)
  //   }
  // })

  return routes
}
