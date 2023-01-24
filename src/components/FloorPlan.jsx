import Bath from "./Bath"
import Bedroom from "./Bedroom"
import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"
import Hall from "./Hall"

function FloorPlan(props) {
  return (
    <div className="FloorPlan">
      <Kitchen />
      <LivingRoom />
      {Array(3).fill().map((bedroom, idx) => <Bedroom key={idx} bedNum={idx + 1} />)}
      {Array(2).fill().map((bath, idx) => <Bath key={idx} bathNum={idx + 1} size={idx ? "Full" : "Half"} />)}
      <Hall />
    </div>
  )
}

export default FloorPlan