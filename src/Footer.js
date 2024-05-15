import React from 'react'
import { resourcesLinks,communityLinks,platformLinks } from './constant/indexs'

const Footer = () => {
  return (
    <footer className='mt-20 border-t py-10 border-neutral-700 '>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
            <div>
            <h2 className='text-md font-semibold mb-4'>Resoures</h2>
            <ul className='space-y-2'>
                {resourcesLinks.map((item,indexs)=>(
                    <li key={indexs}>
                        <a className='text-neutral-300 hover:text-white' href={item.href}>{item.text}</a>
                    </li>
                ))}
            </ul>
            </div>
            <div>
            <h2 className='text-md  font-semibold mb-4'>Platfrom</h2>
            <ul className='space-y-2'>
                {platformLinks.map((item,indexs)=>(
                    <li key={indexs}>
                        <a className='text-neutral-300 hover:text-white' href={item.href}>{item.text}</a>
                    </li>
                ))}
            </ul>
            </div>
            <div>
            <h2 className='text-md font-semibold mb-4'>Community</h2>
            <ul className='space-y-2'>
                {communityLinks.map((item,indexs)=>(
                    <li key={indexs}>
                        <a className='text-neutral-300 hover:text-white' href={item.href}>{item.text}</a>
                    </li>
                ))}
            </ul>
            </div>
         
         
      
         
        </div>
      
    </footer>
  )
}

export default Footer
