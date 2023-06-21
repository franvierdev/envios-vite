import { useState } from 'react'

export function Prices() {

  const [titledolar, setTitledolar] = useState([]);
  const [titlesol, setTitlesol] = useState([]);
  const [titlepesos, setTitlepesos] = useState([]);

  function Calcular() {

    const dolar = +titledolar - (+titledolar * 0.05)
    const dolar6 = +titledolar - (+titledolar * 0.06)
    const dolar7 = +titledolar - (+titledolar * 0.07)
    const soles = dolar * 0.27
    const pesos = dolar6 * 0.24
    console.log(dolar, soles)
    setTitledolar(dolar7.toFixed(2))
    setTitlesol(soles.toFixed(2))
    setTitlepesos(pesos.toFixed(2))
  }





  const handleSubmit = (e) => {
    e.preventDefault();

    Calcular();

  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="grid gap-3 text-center mt-6">


        <ul className="flex justify-between border-solid bg-gradient-to-r from-gray-100/90 
        to-green-700/90 w-72 rounded-md mx-auto">

          <button className=' text-green-900 font-bold text-2xl px-2 py-1 '>1 Dolar</button>
          <p className='text-3xl text-gray-100 text-shadow1'>=</p>
          <input className=' py-1 text-shadow1 text-2xl  font-semibold text-yellow-400 bg-transparent border-gray-700 w-24' placeholder="USD"
            onChange={(e) => setTitledolar(e.target.value)} value={titledolar} required autoFocus />
          <span className='text-shadow1 text-yellow-400 font-semibold text-xl  ms-64 mt-1  absolute' >Bs</span>
        </ul>


        <ul className='flex rounded-md mx-auto justify-between bg-gradient-to-r  from-gray-100/90 to-green-700/90 w-72'>

          <button className=' text-green-900 text-2xl font-bold px-2 py-1 ' disabled={true} >1 Sol</button>
          <p className='text-3xl text-gray-100 text-shadow1'>=</p>
          <input className=' px-3 py-1 text-shadow1 text-2xl bg-transparent font-semibold w-24 text-yellow-400' placeholder="PEN" disabled
            onChange={(e) => setTitlesol(e.target.value)} value={titlesol} autoFocus />
          <span className='text-shadow1 text-yellow-400 font-semibold text-xl  ms-64 mt-1  absolute' >Bs</span>

        </ul>


        <ul className='flex rounded-md mx-auto justify-between bg-gradient-to-r  from-gray-100/90 to-green-700/90  w-72'>

          <button className='  text-green-900 text-2xl font-bold px-2 py-1' disabled={true} >1,000 COP</button>
          <p className='text-3xl text-gray-100 text-shadow1'>=</p>
          <input className='px-3 py-1 text-shadow1 font-semibold text-2xl text-yellow-400 bg-transparent w-24' placeholder="COP" disabled
            onChange={(e) => setTitlepesos(e.target.value)} value={titlepesos} autoFocus />
          <span className='text-shadow1 text-yellow-400 font-semibold text-xl  ms-64 mt-1  absolute' >Bs</span>
        </ul>


      </form></div>
  )
}


