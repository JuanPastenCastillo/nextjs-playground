import { useState } from "react"

export const CheckboxForTest = () => {
  const [isChecked, setIsChecked] = useState(false)

  const handleIsChecked = () => setIsChecked((prevState) => !prevState)

  return (
    <>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleIsChecked}
      />
    </>
  )
}
