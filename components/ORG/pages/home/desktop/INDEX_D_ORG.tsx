import { useRouter } from "next/router"

export const INDEX_D_ORG = () => {
  const { asPath } = useRouter()

  return (
    <>
      <h2>ORG 1° page 🔰🔰🔰🔰🔰🔰🔰</h2>
      <nav>Inner navigation bar here</nav>

      <div>Some cards and so on</div>
      <div>Some cards and so on</div>
      <div>Some cards and so on</div>
      <div>Some cards and so on</div>

      <button>To 2° page</button>
      <button>To 3° page</button>
      <button>To 4° page</button>
    </>
  )
}
