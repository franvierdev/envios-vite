import { useState } from 'react'
import './App.css'
import { Cabecera } from './header.jsx'
import { Pata } from './foot.jsx'
import { Prices } from './Prices.jsx'
import { Dia } from './Dia.jsx'
import { Paises } from './banderas.jsx'
import { Bancos } from './Bancos'
import { Calculadora } from './calculadora'

function App() {
  const [titledolar, setTitledolar] = useState([]);
  const [titlesol, setTitlesol] = useState([]);
  const [titlepesos, setTitlepesos] = useState([]);
  // const [count, setCount] = useState(0)

  return (
    <div>
      < div className='lg:grid lg:grid-cols-2 bgimg'>
        <Cabecera />
        <Dia />
        <Prices title={titledolar} setTitle={setTitledolar} Sol={titlesol} setSol={setTitlesol} Pesos={titlepesos} setPesos={setTitlepesos} />
        <Paises />
        <Bancos />
        <Pata />
        <Calculadora title={titledolar} setTitle={setTitledolar} Sol={titlesol} setSol={setTitlesol} Pesos={titlepesos} setPesos={setTitlepesos} />
      </div>
      <div>



        {/* <div>
        {/* <Prices /> */}
        {/* <Calculadora /> */}

        {/* </div>  */}


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
    </div>



  )
}

export default App
