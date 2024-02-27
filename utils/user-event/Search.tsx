import { ReactElement, useState } from "react"

export const SearchParent = () => {
  const [search, setSearch] = useState("")

  function handleChange(event: any) {
    setSearch(event.target.value)
  }

  return (
    <section>
      <Search
        value={search}
        onChange={handleChange}>
        Search:
      </Search>

      <p>Searches for {search ? search : "..."}</p>
    </section>
  )
}

export const Search = ({
  value,
  onChange,
  children,
}: {
  value: string
  onChange: (event: any) => void
  children: ReactElement | string
}) => {
  return (
    <>
      <label htmlFor="search">{children}</label>

      <input
        id="search"
        type="text"
        value={value}
        onChange={onChange}
      />
    </>
  )
}
