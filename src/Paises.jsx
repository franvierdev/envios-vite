import peru from '../imgs/peru.png'

export function Paises() {
  return <div className="flex justify-center mt-6">
    <img src={peru} className='w-10 h-9' alt="..." />
    <p
      className=" px-2 mt-1 text-white fw-bold text-shadow text-xl"

    >
      ⇌
    </p>
    <img className='w-10 h-9' src="imgs/venezuela.png" alt="..." />
    <p
      className=" px-2 mt-1 text-white fw-bold text-shadow text-xl"

    >
      ⇌
    </p>
    <img className='w-10 h-9' src="imgs/colombia.png" alt="..." />
  </div>





}