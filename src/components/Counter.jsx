import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="counter-box">
      <div>
        <p className="counter-label">Состояние React</p>
        <p className="counter-value">{count}<span> кликов</span></p>
      </div>
      <button className="button button-primary" onClick={() => setCount((value) => value + 1)}>
        Нажми меня <span aria-hidden="true">↗</span>
      </button>
    </div>
  )
}
