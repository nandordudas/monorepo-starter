import { useState } from 'react'

import classes from './counter.module.css'

interface CounterProps {
  onClick: (count: number) => void
}

export const Counter = ({ onClick }: CounterProps) => {
  const [count, setCount] = useState(0)

  return (
    // eslint-disable-next-line dot-notation
    <div className={classes['appContainer']}>
      <h1>Vite + React</h1>
      <div>
        <button onClick={() => {
          setCount(count => count + 1)
          onClick(count)
        }}>
          count is {count}
        </button>
      </div>
    </div>
  )
}
