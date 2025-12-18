import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/16/solid"
import { Bars4Icon,  } from "@heroicons/react/16/solid"
import gsap from "gsap"
import { useState ,useEffect} from "react"
import { Link } from "react-router"



const MobileNavigation = () => {

  const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {
      setIsOpen(!isOpen)

    }
 
    useEffect(() => {
      
      if (isOpen) {
        gsap.fromTo(".menu-div", {height: 0, opacity: 0},
           {height: "auto", opacity: 1, duration: 0.2, ease: "power2.out"});

           gsap.fromTo(".menu-item",
           {x: -50, opacity: 0},
           {x: 0, opacity: 1, duration: 1, stagger: 0.1, delay: 0.5, ease: "power2.out"});
      }
      
    }, [isOpen])


    


  return (
    <section className="fixed top-0 left-0 right-0 z-50 w-full  border-b border-gray-200 items-center justify-center lg:hidden md:hidden sm:block backdrop-blur-md">
      <div className='flex justify-between  p-4 items-center  max-w-6xl mx-auto  z-10 backdrop-blur '>
        <Link to="/" className='text-3xl font-bold font-mono'>Sho<span className="text-[#2E8B57]">pify</span></Link>
        <div className="flex space-x-4 items-center">
        <MagnifyingGlassIcon className="h-8 w-8  cursor-pointer hover:bg-gray-100 rounded-md p-1 " />


         {isOpen ? <XMarkIcon
        onClick={handleClick}
        className="h-8 w-8  cursor-pointer hover:bg-gray-100 rounded-md p-1 " /> : <Bars4Icon
        onClick={handleClick}
        className="h-8 w-8  cursor-pointer hover:bg-gray-100 rounded-md p-1   "
        />
        
        }
        

      </div>
      </div>
      {isOpen && (


      <div className="align-start  opacity-50 backdrop-blur-md bg-white border-gray-200 menu-div mx-6 border-l border-r rounded border-b pb-2">
        <ul className="flex flex-col space-y-2 p-4 text-lg cursor-pointer ">
          <Link onClick={() => setIsOpen(false)} to="/" className=" px-4 py-2 hover:bg-gray-100 menu-item">Home</Link>
          <Link onClick={() => setIsOpen(false)} to="/shop" className=" px-4 py-2 hover:bg-gray-100 menu-item">Shop</Link>
          <Link onClick={() => setIsOpen(false)} to="/categories" className=" px-4 py-2 hover:bg-gray-100 menu-item">Categories</Link>
          <Link onClick={() => setIsOpen(false)} to="/cart" className=" px-4 py-2 hover:bg-gray-100 menu-item">Cart</Link>
        </ul>


        <div className="space-y-3 flex flex-col p-4 border-gray-200 border-t pt-4">
          <Link to={'/sign-in/'} className="  py-2 border border-gray-200 text-[#000000] rounded  menu-item">Sign In</Link>
          <button className="bg-[#48976a] text-white hover:bg-[#3EA56F] px-6 py-2 rounded transition-all menu-item">Get Started</button>
        </div>
      
 </div>)}
     
    </section>

  )
}

export default MobileNavigation
