import React, { useEffect, useState } from "react";
import { databases } from "../lib/appwrite";

import { StarIcon } from '@heroicons/react/16/solid'

const Shop = () => {
  const [products, setProducts] = useState([]);
  
  const fetchProducts = async () => {
    try {
      const response = await databases.listDocuments(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        import.meta.env.VITE_APPWRITE_COLLECTION_ID
      );

      setProducts(response.documents);
      console.log("Products:", response.documents);
    } catch (error) {
      console.log("Fetch Error:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="px-3">
       <section className='mt-6 lg:mt-16 gap-6 pt-8 max-w-6xl mx-auto h-screen'>
                    <div>
                      <p className='text-gray-600 mt-2 text-center'>Discover our handpicked selection of top-rated products, curated for quality and style.</p>
                      <h1 className='text-2xl text-black font-bold '>Featured Products</h1>
                        
      
                                  <div className='w-full mt-10 grid lg:grid-cols-4 gap-5'>
                  {products.map((product) => (
                    <div
                      key={product.$id}
                      className='scrol group border border-gray-200  rounded-2xl overflow-hidden bg-white hover:border-gray-300 hover:shadow-sm transition-all duration-200 hover:-translate-y-0.5 flex flex-col'
                    >
                      <div className='relative overflow-hidden aspect-[4/3] bg-gray-50'>
                        <img
                          src={product.image}
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
  );
};

export default Shop;