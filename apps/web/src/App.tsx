import { Counter } from '@workspace/ui'
import { makeSafe } from '@workspace/utils/make-safe'
import { useEffect, useState } from 'react'

import reactLogo from './assets/react.svg'
import './App.css'

const API_URL = 'http://localhost:3333/'

type CounterResponse =
  | {
    status: 'success'
    data: {
      count: number
    }
  } | {
    status: 'error'
    error: {
      message: string
    }
  }

const postCount = makeSafe(async (count: number) => {
  const response = await fetch(API_URL, {
    body: JSON.stringify({ count }),
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await response.json() as CounterResponse

  return data
})

export const App = () => {
  const [data, setData] = useState<Record<string, any> | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const onClick = async (count: number) => {
    setIsLoading(_state => true)

    const response = postCount(count)

    // TODO: missing try-catch
    setData(response.ok ? await response.value : response.error)
    setIsLoading(_state => false)
  }

  useEffect(() => {
    fetch(API_URL)
      .then<Record<string, any>>(response => response.json())
      .then(setData)
      .catch(error => setData({ error }))
      .finally(() => setIsLoading(_state => false))
  }, [])

  return (
    <div className="App">
      {isLoading && <p>loading...</p>}
      {!isLoading && data && <pre>
        {JSON.stringify(data)}
      </pre>}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Counter onClick={onClick} />
    </div>
  )
}
