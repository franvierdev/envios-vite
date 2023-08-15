import { useState } from 'react'
import Select from 'react-select'
export function Calculadora({ Sol, Pesos, title, soles, peso, dolar, cls, nome }) {

  const [Cantidad, setCantidad] = useState([]);
  const [Total, setTotal] = useState([]);
  const [proveedor, setProveedor] = useState();
  const [moneda, setMoneda] = useState();
  const options = [
    { value: +Sol, label: soles },
    { value: Pesos / 1000, label: peso },
    { value: +title, label: dolar },
  ]
  var TotalBs
  function CalcularBs() {
    {
      nome ? TotalBs = Cantidad / proveedor : TotalBs = Cantidad * proveedor
      setTotal(TotalBs.toFixed(2))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    CalcularBs();
  }
  const handleSelectChange = ({ value, label }) => (console.log(value), setProveedor(value), setMoneda(label))

  return <div className={' col-start-2 row-start-3 row-end-5 mt-4 lg:mt-auto lg:ms-0 bg-slate-500/90 border-2 border-slate-200/40 rounded-xl max-w-xs px-2 pt-4 pb-1 gap-10 lg:max-w-md  lg:justify-items-start leading-loose ' + cls}><div className="mt-2">
    <h2 className="bg-green-600/90 p-2 border border-green-500 rounded-lg -mt-4 text-xl text-white text-shadow" >Calculadora de moneda {(nome) ? 'local' : 'extranjera'} a {(nome) ? 'extranjera' : 'local'}</h2>



  </div>
    <form onSubmit={handleSubmit}>
      <h3 className='text-lg text-green-400'>Moneda</h3>
      <Select className='w-40 h-8'
        placeholder='Moneda'
        options={options}
        onChange={handleSelectChange}
        required />

      <h3 className='mt-4 text-lg text-green-400'>Cantidad</h3>
      <input className=' w-40 rounded-sm ps-1 h-6' onChange={(e) => setCantidad(e.target.value)} value={Cantidad} placeholder='' />
      <button className='bg-green-600/75 border-2 border-green-400 ms-3 lg:ms-10 -mt-4 px-2  lg:px-8  pb-1 rounded-md text-yellow-400 text-shadow1 font-bold text-2xl'>Calcular</button>
      <h3 className=' text-lg text-green-400'>Total {(nome) ? moneda : 'Bs'}</h3>
      <input className='w-40 rounded-sm ps-1 h-6' onChange={(e) => { setTotal(e.target.value) }} value={Total} />

    </form>
  </div>


}