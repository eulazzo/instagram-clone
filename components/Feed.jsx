import React from 'react'
import Stories from '../components/Stories'
import Posts from '../components/Posts'

export default function Feed() {
  return (
    <main className='grid grid-cols-1 
    md:grid-cols-2 md:max-w-3xl xl:grid-col-3 
    xl:max-w-6xl mx-auto '>
      
      <section className='col-span-1'>
        <Stories />
        <Posts />
      </section>
         
    </main>
  )
}





 