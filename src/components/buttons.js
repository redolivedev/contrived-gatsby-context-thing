import React, { useContext } from "react"
import CounterContext from "../shared/counter-context"

function Buttons() {
  const counterContext = useContext(CounterContext)
  function updateCounter() {
    counterContext.incrementCounter()
  }

  return (
    <div>
      <button onClick={updateCounter}>Click</button>
      <p>Count: {counterContext.currentCount}</p>
    </div>
  )
}

export default Buttons
