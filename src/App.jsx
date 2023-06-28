import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Cabecera } from './header.jsx'
import { Pie } from './foot.jsx'
import { Prices } from './Prices.jsx'
import { Dia } from './Dia.jsx'
import { Paises } from './banderas.jsx'
import { Bancos } from './Bancos'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='bg-green-600'> <div
      className='bgimg'>
      <Cabecera />
      <Dia />
      <Prices />
      <Paises />
      <Bancos />
      <Pie />

    </div>
      <div>
        <Prices />

      </div>


      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
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
      </p> */}
    </div>



  )
}

export default App
