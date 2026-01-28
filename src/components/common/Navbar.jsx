import { RiMenu2Fill } from "react-icons/ri";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { RiSearch2Line } from "react-icons/ri";

function Navbar() {
  return (
    <div className='p-4 shadow-lg shadow-black/10   backdrop-blur-xs  sansation-light fixed top-0 w-full z-50'>
    <div className='flex justify-between   '> 
      <button>
      <RiMenu2Fill size={32}/>
      </button>
      <h1 className='text-4xl sansation-bold '>Rétro<span className='text-gray-600'>X</span></h1>
      <button>
      <RiShoppingBag4Fill size={32}/>
      </button>
    </div>
    <form onSubmit={(e)=>e.preventDefault()}  className='pt-4 flex items-center relative'>
       <button className="absolute left-2 ">
        <RiSearch2Line size={30} />
        </button>
        <input type="text" placeholder="Search For Men's Fashions" className='border border-black bg-white/30 w-full p-3 pl-12 outline-none' />
    </form>
    </div>
  )
}

export default Navbar
