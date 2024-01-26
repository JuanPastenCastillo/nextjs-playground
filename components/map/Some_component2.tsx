export const Some_component2 = ({ showCard }: { showCard: boolean }) => {
  return (
    <>
      {showCard ? (
        <>
          <div
            style={{
              border: "2px red solid",
              backgroundColor: "cornflowerblue",
              height: "250px",
              width: "200px",
              borderRadius: "8px",
              padding: "8px",
              // position: "absolute",
              top: "0",
              right: "0",
            }}>
            A card you know
          </div>
        </>
      ) : null}
    </>
  )
}
