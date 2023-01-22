import { useState } from "react"

export const CounterWidget = () => {
  const [state, setState] = useState(0)
  return (
    <div>
      <button onClick={() => setState((s) => s + 1)}>Click me</button>
      <span>{state}</span>
    </div>
  )
}

export default CounterWidget
