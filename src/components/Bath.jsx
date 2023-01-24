function Bath(props) {
  return (
    <div className={`Bath${props.bathNum}`}>
      <h1>{props.size} Bath</h1>
    </div>
  )
}

export default Bath