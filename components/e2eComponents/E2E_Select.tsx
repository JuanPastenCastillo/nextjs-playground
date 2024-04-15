export const E2E_Select = () => {
  return (
    <>
      <label>Choose a pet:</label>

      <select
        name="pets"
        multiple>
        <option value="">--Please choose an option--</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
      </select>
    </>
  )
}
