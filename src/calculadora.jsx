import { Prices } from './Prices'
import { useState } from 'react'
export function Calculadora({ Sol, setSol }) {

  const [Soles, setSoles] = useState([]);
  const [Total, setTotal] = useState([]);
  function CalcularBs() {

    const TotalBs = Sol * Soles
    setTotal(TotalBs.toFixed(2))
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    CalcularBs();
  }

  return <form className='bg-slate-500 p-2 flex flex-wrap gap-3' onSubmit={handleSubmit}>
    <select className=''>
      <option className="">soles a bs</option>
      <option className="">Soles a Pesos</option>
      <option className="">Pesos a Bs</option>
      <option className="">Pesos a Soles</option>
      <option className="">Bs a Pesos</option>
      <option className="">Bs a Soles</option>
    </select>
    {/* <input value={titleDolar} onChange={(e) => { setTitleDolar(e.target.value) }} /> */}
    <h3>precio</h3>
    <input onChange={(e) => setSol(e.target.value)} value={Sol} />
    <h3>Cantidad</h3>
    <input onChange={(e) => setSoles(e.target.value)} value={Soles} />
    <button className='bg-green-600/70 px-1 rounded-md'>Calcular</button>
    <h3>Total Bs</h3>
    <input onChange={(e) => { setTotal(e.target.value) }} value={Total} />

  </form>




}