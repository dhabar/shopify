import { Link } from "react-router"


const Desktop = () => {
  return (
    <section className='fixed top-0 left-0 right-0 z-1  backdrop-blur w-full  border-b border-gray-200 items-center justify-center lg:block hidden'>
      <div className='flex justify-between  p-4 items-center  max-w-6xl mx-auto  z-10 backdrop-blur '>
        <Link to="/" className='text-3xl font-bold font-mono'>Sho<span className="text-[#2E8B57]">pify</span></Link>
     <ul className="hidden md:flex space-x-8 text-md cursor-pointer items-center">
  <Link
    className="relative hover:text-[#2E8B57] after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-[#2E8B57] after:transition-all after:duration-300 hover:after:w-full focus:after:w-full"
    to="/"
  >
    Home
  </Link>
  <Link
    className="relative hover:text-[#2E8B57] after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-[#2E8B57] after:transition-all after:duration-300 hover:after:w-full focus:after:w-full"
    to="/shop"
  >
    Shop
  </Link>
  <Link
    className="relative hover:text-[#2E8B57] after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-[#2E8B57] after:transition-all after:duration-300 hover:after:w-full focus:after:w-full"
    to="/categories"
  >
    Categories
  </Link>
  <Link
    className="relative hover:text-[#2E8B57] after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-[#2E8B57] after:transition-all after:duration-300 hover:after:w-full focus:after:w-full"
    to="/cart"
  >
    Cart
  </Link>
</ul>



     <div className="space-x-4 ">
          <button className=" px-10 py-2 border border-gray-200 text-[#000000] rounded ">Sign In</button>
          <button className="bg-[#48976a] text-white hover:bg-[#3EA56F] px-6 py-2 rounded transition-all">Get Started</button>
        </div>
      </div>
      
    </section> 
  )
}

export default Desktop


