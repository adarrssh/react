import withCounter from "./withCounter"

const ClickCounter = (props) => {
    const {count,increment} = props
  return (
    <div>
        <button onClick={increment}>Click Me </button>
        <h2>count is : {count}</h2>
    </div>
  )
}

export default withCounter(ClickCounter)