function Bedroom(props) {
  return (
    <div className={`Bedroom${props.bedNum}`}>
      <h1>Bedroom {props.bedNum}</h1>
    </div>
  )
}

export default Bedroom