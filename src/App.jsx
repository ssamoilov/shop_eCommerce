import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div> hello bro </div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nam rerum sunt optio reprehenderit hic repellendus vero, debitis error. Dolorem mollitia ex voluptate necessitatibus ipsum, velit tempora vel earum in!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nam impedit vitae inventore laudantium minus corrupti, obcaecati quod, cupiditate quo recusandae excepturi at. Voluptates exercitationem assumenda cupiditate officiis velit ratione.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus a impedit eum eaque itaque rem qui aperiam nemo ipsa quam ab quas, ad ullam repudiandae quod debitis minima consequatur expedita!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, pariatur neque! Doloribus iure quo odit voluptatum necessitatibus. Omnis quod ipsam soluta, quam, consequatur quo minima officia cupiditate assumenda voluptatem quidem.
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
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
    </>
  )
}

export default App
