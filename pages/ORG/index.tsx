import { INDEX_D_ORG } from "@/components/ORG/pages/home/desktop/INDEX_D_ORG"
import { useWidthSize } from "@/hooks/use-width_size"

// const INDEX_D_ORG_Component = dynamic(() => import("../../components/ORG/pages/home/desktop/INDEX_D_ORG").then((mod) => mod.INDEX_D_ORG), { ssr: false })

export default function INDEX_ORG() {
  const { isMobile } = useWidthSize()

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_ORG />
        </>
      ) : (
        <>
          <h1>MOBILE HERE</h1>
        </>
      )}
    </>
  )
}
