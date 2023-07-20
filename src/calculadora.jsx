import { useState } from 'react'
import Select from 'react-select'
export function Calculadora({ Sol, Pesos, title }) {

  const [Cantidad, setCantidad] = useState([]);
  const [Total, setTotal] = useState([]);
  const [proveedor, setProveedor] = useState();
  const options = [
    { value: Sol, label: 'Soles' },
    { value: Pesos, label: 'Pesos' },
    { value: title, label: 'Dolares' },
  ]
  function CalcularBs() {

    const TotalBs = proveedor * Cantidad
    setTotal(TotalBs.toFixed(2))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    CalcularBs();
  }
  const handleSelectChange = ({ value }) => (console.log(value), setProveedor(value))

  return <form className='m-auto lg:m-0 col-start-2 row-start-3 row-end-auto bg-slate-500/90 border-2 border-slate-200/40 rounded-xl max-w-sm p-3 gap-10 lg:max-w-sm  lg:justify-items-start leading-loose relative' onSubmit={handleSubmit}>
    <h3 className='text-lg'>Moneda</h3>
    <Select className='w-40 h-10'
      placeholder='Moneda'
      options={options}
      onChange={handleSelectChange}
      required />

    <h3 className=''>Cantidad</h3>
    <input className='w-40 rounded-sm ps-1' onChange={(e) => setCantidad(e.target.value)} value={Cantidad} placeholder='' />
    <button className='bg-green-600/70 ms-2 -mt-24 px-16  py-20 absolute rounded-md'>Calcular</button>
    <h3>Total Bs</h3>
    <input className='w-40 rounded-sm ps-1' onChange={(e) => { setTotal(e.target.value) }} value={Total} />

  </form>




}