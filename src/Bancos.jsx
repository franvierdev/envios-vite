import thumbnail from '../imgs/thumbnail.png'
import bcp from '../imgs/bcp.png'
import logovzla from '../imgs/logovzla.png'
import daviplata from '../imgs/daviplata.png'
import logo from '../imgs/logo.png'
import pngwing from '../imgs/pngwing.png'

export function Bancos() {
  return <div className=" my-6 py-2 grid mx-auto w-max shadow-lg bg-green-700/40  border-2 border-green-400/40  rounded-xl">
    <div className="flex justify-center gap-4 pb-2 mx-4 mt-4">
      <img
        className="bg-slate-50/60 shadow-xl border-2 border-white/70 rounded-md p-1 w-16 "
        src={thumbnail}
        alt="..."

      />
      <img
        className="bg-blue-800/70 shadow-xl rounded-md border-2 border-blue-700/70 p-1 h-8"
        src={bcp}
        alt="..."

      />
      <p className="mt-1 text-white text-md text-shadow font-semibold
      ">

      </p>
      <img
        className="bg-slate-50/60 rounded-md drop-shadow-lg p-1 h-8  border-2 border-white/70 "
        src={logovzla}
        alt=""

      />
    </div>
    <div className="flex justify-center gap-4 ms-4">
      <img
        className="bg-slate-50/60 rounded-md drop-shadow-lg px-2 pt-1 pb-1 h-12  border-2 border-white/70 "
        src={daviplata}
        alt=""

      />
      <img
        className="rounded-full ps-2 pe-2 pt-1 pb-1 bg-slate-50/60 drop-shadow-lg h-14  border-2 border-white/70 "
        src={logo}
        alt=""

      />
      <p className="mt-3 text-white text-shadow text-md font-semibold" >

      </p>
      <img
        className="bg-slate-50/60 rounded-md ps-1 pe-1 pb-1 h-12 drop-shadow-lg  border-2 border-white/70 "
        src={pngwing}
        alt=""

      />
    </div>
  </div >

}