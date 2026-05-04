import { ArrowLongRightIcon, PlayIcon } from '@heroicons/react/24/outline'
import React, { useEffect } from 'react'
import { products } from '../Data'
import { StarIcon } from '@heroicons/react/16/solid'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'



const Home = () => {

  

  useEffect(()=>{
    let tl = gsap.timeline()
    gsap.registerPlugin(ScrollTrigger)
    

    tl.fromTo('.hero',{opacity:0, y:50},{opacity:1, y:0, duration:1.5, ease:'power2.out', stagger:0.3 ,delay:0.1})
    tl.fromTo('.scrol',
  {  y: 50 , opacity: 0},
  {
    opacity:1,
    y: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: '.scrol',
      start: 'top 80%',
      end: 'bottom 20%',
    }
  },
'-=1.5')

  },[])




  const labels = [
            { value: "50K+", label: "Orders delivered" },
            { value: "4.9★", label: "Customer rating" },
            { value: "100%", label: "Secure checkout" },
            { value: "Free", label: "Shipping" },
          ]
  return (
    <div className='px-4 bg-gradient-to-b from-gray-100/70 to-white'>
      <section className='  max-w-3xl mx-auto flex flex-col items-center text-center gap-6 lg:pt-30 pt-12 hero'>

        <h1 className='text-3xl lg:text-5xl font-bold text-black'>
          Upgrade Your Style This Season
        </h1>

        <p className='text-gray-600 text-lg'>
          Discover handpicked collections designed for comfort and confidence.
          Shop the latest trends with exclusive deals and fast delivery.
        </p>

        <div className='flex flex-col sm:flex-row gap-4 w-full justify-center'>
          
          <button className='w-full sm:w-auto px-6 py-3 rounded-xl bg-black text-white text-lg flex items-center justify-center gap-2'>
            Shop Now
            <ArrowLongRightIcon className='h-5 w-5 '/>
          </button>

          <button className='w-full sm:w-auto px-6 py-3 rounded-xl border border-gray-300 text-lg flex items-center justify-center gap-2'>
            <PlayIcon className='h-5 w-5'/>
            Explore Products
          </button>

        </div>

        <div className='w-full  lg:h-20 rounded-xl shadow border border-gray-300 mt-10 overflow-hidden '> 
        <div className="grid grid-cols-4 divide-x divide-gray-100 border border-gray-100 rounded-xl overflow-hidden">
          {labels.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1 py-5 px-4 bg-white">
              <span className="text-xl font-medium text-gray-900 tracking-tight">{value}</span>
              <span className="text-xs text-gray-500 text-center">{label}</span>
            </div>
          ))}
        </div>
</div>
 </section>

{ /* 2 */ }
            <section className='mt-6 lg:mt-16 gap-6 pt-8 max-w-6xl mx-auto h-screen'>
              <div>
                <p className='text-gray-600 mt-2 text-center'>Discover our handpicked selection of top-rated products, curated for quality and style.</p>
                <h1 className='text-2xl text-black font-bold '>Featured Products</h1>
                  

                            <div className='w-full mt-10 grid lg:grid-cols-4 gap-5'>
            {products.map((product) => (
              <div
                key={product.id}
                className='scrol group border border-gray-200  rounded-2xl overflow-hidden bg-white hover:border-gray-300 hover:shadow-sm transition-all duration-200 hover:-translate-y-0.5 flex flex-col'
              >
                <div className='relative overflow-hidden aspect-[4/3] bg-gray-50'>
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
                  />
                  <span className='absolute top-2.5 left-2.5 bg-white/90 text-gray-500 text-[10px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-full border border-gray-100'>
                    {product.category}
                  </span>
                </div>

                <div className='p-4 flex flex-col gap-2 flex-1'>
                  <h2 className='text-[15px] font-serif font-medium text-gray-900 leading-snug'>
                    {product.title}
                  </h2>

                  <div className='flex gap-0.5'>
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`h-3.5 w-3.5 ${
                          i < Math.round(product.rating)
                            ? 'text-amber-400'
                            : 'text-gray-200'
                        }`}
                      />
                    ))}
                  </div>

                  <div className='flex justify-between items-center mt-auto pt-3'>
                    <span className='text-[17px] font-semibold text-gray-900'>
                      ${product.price}
                    </span>
                    <button className='bg-gray-900 text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-gray-700 transition-colors'>
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
               </div>
              </div> 
           
</section>

    </div>
  )
}

export default Home




