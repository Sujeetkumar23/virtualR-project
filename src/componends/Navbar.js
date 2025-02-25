import React, { useState } from 'react'
import logo from '../assets/logo.png'
import {navItems} from '../constant/indexs'
import { Menu } from 'lucide-react'
import {X} from 'lucide-react'

const Navbar = () => {
  const [open,setopen] =useState(false)
  const togelle =()=>{
    setopen(!open)
  }
  return (
    <div>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items center flex-shirk-0">
              <img src={logo} className='h-10 w-10 mr-2  '></img>
              <span className='text-xl tracking-tight '>virtualR</span>
              </div>
              <ul className='hidden lg:flex ml-14 space-x-12'>
               {
                navItems.map((item,indexs)=>(
                  <li key={indexs}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))
               }
              </ul>
              <div className="hidden lg:flex justify-center space-x-12 items-center">
                <a href='#' className='py-2 px-3 border rounded'>sign in</a>
                <a href='#' className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md hover:to-orange-500' >create a account</a>
              </div>
              <div className="lg:hidden md:flex flex-col justify-end">
                <button onClick={togelle}>{open ?  <X/> : <Menu/>}</button>
              </div>

          </div>
          { open && (
            <div className="fixed right-0 z-20 bg-neutral-700 w-full p-12 flex flex-col justify-center item-center lg:hidden">
              <ul className='text-white'>
                {navItems.map((item,indexs)=>(
                  <li key={indexs} className='py-4'>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))

                }
              </ul>
              <div className="flex space-x-6">
                <a href='#' className='py-2 px-3 border rounded-md '> sign in</a>
                <a href='#' className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md hover:to-orange-500 ' >create a account</a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
