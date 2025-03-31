import { useState } from 'react'
import './App.css'
import { Cabecera } from './header.jsx'
import { Pata } from './foot.jsx'
import { Prices } from './Prices.jsx'
import { Dia } from './Dia.jsx'
import { Paises } from './banderas.jsx'
import { Bancos } from './Bancos'
import { Calculadora } from './calculadora'
import { SideBar } from './sidebar'

function App() {
  const [titledolar, setTitledolar] = useState([]);
  const [titlesol, setTitlesol] = useState([]);
  const [titlepesos, setTitlepesos] = useState([]);



  // const [count, setCount] = useState(0)

  return (

    < div className='lg:grid lg:grid-cols-2 bgimg gap-4 gap-x-40'>
      <SideBar />
      <Cabecera />
      <Dia />
      <Prices title={titledolar} setTitle={setTitledolar} Sol={titlesol} setSol={setTitlesol} Pesos={titlepesos} setPesos={setTitlepesos} />
      <Paises />
      <Bancos />
      <Pata />
      <Calculadora cls='m-auto' title={titledolar} setTitle={setTitledolar} soles='Soles' peso='Pesos' dolar='Dolares' Sol={titlesol} setSol={setTitlesol} Pesos={titlepesos} setPesos={setTitlepesos} />
      <Calculadora nome={1} cls='row-start-5 m-auto' title={+titledolar + (titledolar * 0.12)} setTitle={setTitledolar} soles='Bs a Soles' peso='Bs a Pesos' dolar='Bs a Dolares' Sol={titlesol} setSol={setTitlesol} Pesos={titlepesos} setPesos={setTitlepesos} />
    </div>





  )
}

export default App
