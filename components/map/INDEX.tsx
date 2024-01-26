import { Map, Marker } from "pigeon-maps"
import { useState } from "react"
import { Some_component2 } from "./Some_component2"
import { Some_component } from "./some_component"
import { MAP } from "./styles/MAP"

export const Map_Component = () => {
  const [hue, setHue] = useState(0)
  const color = `hsl(${hue % 360}deg 39% 70%)`

  const [showCard, setShowCard] = useState(false)
  const [allWidth, setAllWidth] = useState(false)

  const [showCard2, setShowCard2] = useState(false)
  return (
    <MAP allWidth={allWidth}>
      <div>
        <div style={{ height: "50vh" }}>The cards here</div>
        <div style={{ height: "50vh" }}>The cards here</div>
        <div style={{ height: "50vh" }}>The cards here</div>
        <div style={{ height: "50vh" }}>The cards here</div>
        <div style={{ height: "50vh" }}>The cards here</div>
        <div style={{ height: "50vh" }}>The cards here</div>
        <div style={{ height: "50vh" }}>The cards here</div>
      </div>

      <div>
        <button onClick={() => setAllWidth((prevState) => !prevState)}>Show All</button>

        <Map
          // height={400}
          defaultCenter={[40.6712062, -73.9662055]}
          defaultZoom={14}>
          <Marker
            width={80}
            anchor={[40.6712062, -73.9662055]}
            color={color}
            onClick={() => {
              setHue(hue + 20)
              setShowCard((prevState) => !prevState)
            }}
          />

          <Marker
            width={50}
            anchor={[40.671467, -73.96288]}
            onClick={() => {
              setHue(hue + 40)
              setShowCard2((prevState) => !prevState)
            }}
          />

          <Some_component showCard={showCard} />
          <Some_component2 showCard={showCard2} />
        </Map>
      </div>
    </MAP>
  )
}
