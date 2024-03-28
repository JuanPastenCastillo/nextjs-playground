import { E2E_CheckboxesRadioButtons } from "@/components/e2eComponents/E2E_CheckboxesRadioButtons"
import { E2E_Input } from "@/components/e2eComponents/E2E_Input"

export default function E2E_Playwright() {
  return (
    <>
      <E2E_Input />
      <E2E_CheckboxesRadioButtons />
    </>
  )
}
