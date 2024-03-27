import { useState } from "react"
import PDFContext from "./PDFContext"

const PDFProvider = ({children}) => {
  const [fileURL, setFileURL] = useState(null)
  return (
    <PDFContext.Provider value={{fileURL, setFileURL}}>{children}</PDFContext.Provider>
  )
}

export default PDFProvider