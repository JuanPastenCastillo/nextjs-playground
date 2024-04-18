import { Dialog_D_Implemenetation } from "@/components/e2eComponents/Dialog_D_Implemenetation"
import { E2E_CheckboxesRadioButtons } from "@/components/e2eComponents/E2E_CheckboxesRadioButtons"
import { E2E_Focus } from "@/components/e2eComponents/E2E_Focus"
import { E2E_Input } from "@/components/e2eComponents/E2E_Input"
import { E2E_MouseClick } from "@/components/e2eComponents/E2E_MouseClick"
import { E2E_MouseClickModifiers } from "@/components/e2eComponents/E2E_MouseClickModifiers"
import { E2E_MouseHover } from "@/components/e2eComponents/E2E_MouseHover"
import { E2E_MouseRightClick } from "@/components/e2eComponents/E2E_MouseRightClick"
import { E2E_NewTab } from "@/components/e2eComponents/E2E_NewTab"
import { E2E_Press } from "@/components/e2eComponents/E2E_Press"
import { E2E_PressSequentially } from "@/components/e2eComponents/E2E_PressSequentially"
import { E2E_Select } from "@/components/e2eComponents/E2E_Select"

export default function E2E_Playwright() {
  return (
    <>
      <E2E_Input />
      <E2E_CheckboxesRadioButtons />
      <E2E_Select />
      <E2E_MouseClick />
      <E2E_MouseRightClick />
      <E2E_MouseClickModifiers />
      <E2E_MouseHover />
      <E2E_PressSequentially />
      <E2E_Press />
      <E2E_Focus />
      <Dialog_D_Implemenetation />
      <E2E_NewTab />
    </>
  )
}
