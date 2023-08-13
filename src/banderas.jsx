import peru from '../imgs/peru.png'
import venezuela from '../imgs/venezuela.png'
import colombia from '../imgs/colombia.png'


export function Paises() {
  return <div className="col-start-1 row-start-4  flex justify-center lg:justify-self-end  mt-4 lg:mt-3 lg:me-14 ">
    <img src={peru} className='h-10 rounded-full border-2 border-gray-300' alt="..." />
    <p
      className=" px-2 mt-1 text-white fw-bold text-shadow text-xl"

    >
      ⇌
    </p>
    <img className='h-10 rounded-full border-2 border-gray-300' src={venezuela} alt="..." />
    <p
      className=" px-2 mt-1 text-white fw-bold text-shadow text-xl"

    >
      ⇌
    </p>
    <img className='h-10 rounded-full border-2 border-gray-300' src={colombia} alt="..." />
  </div>





}