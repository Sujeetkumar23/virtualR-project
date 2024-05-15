import React from 'react'
import { testimonials } from './constant/indexs'
const Testimonies = () => {
  return (
    <div className='mt-20 tracking-tight'>
        <h2 className='text-3xl sm:text-5xl lg:text-5xl text-center my-8 tracking-wide lg:my-20'>what people are saying</h2>
        <div className='flex flex-wrap justify-center'>
            {testimonials.map((item,indexs)=>(
                <div key={indexs} className='w-full sm:w-1/2 lg:w-1/3 py-2 px-4' >
                    <div className='bg-neutral rounded-md p-6 text-md border border-x-neutral-800 front-thin'>
                        <p>{item.text}</p>
                        <div className='flex mt-8 items-start'>
                            <img className='w-12  h-12 mr-6 rounded-full border border-neutral-300' src={item.image} alt={item.user}></img>
                            <div>
                              <h6>{item.user}</h6>
                              <span className='text-sm font-normal italic text-neutral-600'>{item.company}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default Testimonies
