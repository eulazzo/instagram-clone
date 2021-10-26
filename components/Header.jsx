import React from 'react'
import Image from 'next/image'


import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon
}from '@heroicons/react/outline'
import {HomeIcon}from '@heroicons/react/solid'

const Header = ()=> {

  return (
    <div className='shadow-sm border-b bg-white top-0 sticky z-100'>
      <div className='flex items-center  justify-between 
      max-w-6xl mx-5 lg:mx-auto'>
        
        <div className='relative  hidden lg:inline-grid  
          h-24 w-24 cursor-pointer'> 
          <Image 
            src='https://links.papareact.com/ocw' 
            layout='fill'
            objectFit='contain'
          />
        </div>

        <div className='relative h-10 w-10 lg:hidden 
          flex-shrink-0 cursor-pointer'>
          <Image 
            src='https://links.papareact.com/jjm' 
            layout='fill' 
            objectFit='contain'
          />
        </div>

        <div className='max-w-xs'>
          <div className=' mt-1 relative p-3 rounded-md'>
            <div className='absolute inset-y-0 pl-3 flex items-center 
            pointer-events-none'> 
              <SearchIcon className='h-5 w-5 text-gray-500'/>
            </div>
            <input className='bg-gray-50 block w-full pl-10 
            border-gray-300 rounded-md 
            focus:ring-black focus:border-black' type="text" placeholder='Search' />
          </div>
        </div>
         
        <div className='flex items-center justify-end space-x-4'>
          <HomeIcon className='navBtn'/>
          <MenuIcon className='h-6 w-6 md:hidden cursor-pointer'/>
        
          <div className='relative navBtn'>
            <PaperAirplaneIcon className='navBtn rotate-45'/>
            <div className=' -top-2 -right-2 
            absolute text-xs w-5 h-5 bg-red-500
             flex items-center justify-center 
             rounded-full text-center animate-pulse text-white'>3</div>
          </div>

          <PlusCircleIcon className='navBtn' />
          <UserGroupIcon className='navBtn' />
          <HeartIcon className='navBtn'/>
          <div className='relative h-10 w-10 rounded-full'>
            <Image 
              className=' rounded-full' 
              src='https://thispersondoesnotexist.com/image'
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div>
         
      </div>
    </div>
  )
}


export default Header