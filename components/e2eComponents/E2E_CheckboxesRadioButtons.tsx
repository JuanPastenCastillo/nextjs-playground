export const E2E_CheckboxesRadioButtons = () => {
  return (
    <div>
      <label>
        Checkbox button
        <input type="checkbox" />
      </label>

      <label>
        Another Checkbox button
        <input type="checkbox" />
      </label>

      <fieldset>
        <label>
          Radio button 1
          <input
            type="radio"
            name="group"
            value="radio_1"
          />
        </label>
        <label>
          Radio button 2
          <input
            type="radio"
            name="group"
            value="radio_2"
          />
        </label>
      </fieldset>
    </div>
  )
}
