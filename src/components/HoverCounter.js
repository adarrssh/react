import withCounter from "./withCounter"

const HoverCounter = ({count,increment}) => {
  return (
    <div>
        <button onMouseOver={increment}>Hover Me </button>
        <h2>count is : {count}</h2>
    </div>
  )
}

export default withCounter(HoverCounter)