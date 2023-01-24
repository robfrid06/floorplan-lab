import Oven from "./Oven"
import Sink from "./Sink"

function Kitchen(props) {
  return (
    <div className="Kitchen">
      <Oven />
      <h1>Kitchen</h1>
      <Sink />
    </div>
  )
}

export default Kitchen