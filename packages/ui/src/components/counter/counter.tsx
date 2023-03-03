import { useState } from 'react'

import classes from './counter.module.css'

export const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    // eslint-disable-next-line dot-notation
    <div className={classes['appContainer']}>
      <h1>Vite + React</h1>
      <div>
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}
