import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Typography from './components/common/Typography'
import Headline from './components/common/Headline'
import Section from './components/layout-ui/Section'
import Button from './components/common/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Section>

      <div>
        <a href="https://vite.dev" target="_blank" className='bg-red-600' >
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="">
        <Button variant='primary'>1</Button>
        <Button variant='secondary' rounded >2</Button>
        <Button size='lg' variant='primary' rounded >Start your journey</Button>
        <Button size='md' variant='secondary' rounded endIcon={'R'} >Grow My Channel</Button>
      </div>
      <Typography variant='2xl' >Vite + React</Typography>
      <Typography variant='5xl' >Vite + React</Typography>
      <Headline variant='h3'>Vite + React</Headline>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </Section>

  )
}

export default App
