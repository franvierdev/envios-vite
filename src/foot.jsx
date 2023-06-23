import whatsapp from '../imgs/whatsapp.png'
import logo from '../imgs/logo.png'
export function Pie() {
  return <div className=" flex justify-center bg-gradient-to-t from-green-700 via-green-700/70 to-transparent text-center mt-9 py-9 ">
    <img src={whatsapp} onClick='https://wa.me/584121565559?text=Buen%20dia,%20les%20habla%20Francisco%20de%20%C2%A1Hola%20Cambios!%20en%20que%20podriamos%20servirle?' className="bg-green-600/60 rounded-full w-8" alt="..."></img>
    <h2 className="text-2xl font-semibold text-gray-100 text-shadow">
      {/* +57 322 2813632 */}
      +58 412 156 55 59
      {/* +58 424 512 87 19 */}
    </h2>
  </div >

}