import { useState } from 'react'
export function SideBar() {
  const [open, setOpen] = useState(false)
  return <div className="fixed top-0 left-0 w-16 ">
    <button onClick={() => setOpen(true)} className="bg-gray-500 border-2 border-black rounded-lg p-1 ml-4 my-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
    </button>

    <div className={(!open && "hidden ") + " bg-gray-600/30 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm"}>

      <div className={(open ? " w-64 " : "w-0 ") + "transition-all duration-300 bg-gray-500 min-h-screen fixed top-0 left-0 right-0"}>
        <div className={(!open && "hidden ") + "pt-3"}>
          <button onClick={() => setOpen(false)} className="bg-gray-400/80 border-2 border-gray-200 rounded-lg p-1 ml-4 my-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          </button>

          <div className={"text-center mt-14 hover:bg-green-600 py-2 text-xl text-white"}>Calculator</div>
          <div className="text-center my-3 hover:bg-green-600 py-2 text-xl text-white">testimonials</div>
          <div className="text-center my-3 hover:bg-green-600 py-2 text-xl text-white">testimonials</div>
          <div className="text-center my-3 hover:bg-green-600 py-2 text-xl text-white">Contact us</div>
        </div>
      </div>
    </div>
  </div >;
}
