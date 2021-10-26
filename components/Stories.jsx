import React, { useEffect, useState } from 'react'
import faker from 'faker'
import Story from '../components/Story'

export default function Stories() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {

    const suggestions = [...Array(20)].map((item,index)=>({
      ...faker.helpers.contextualCard(),
      id:index
    }))

    setSuggestions(suggestions)
  
  }, [ ])
  return (
    <div className='flex space-x-2  p-6 bg-white 
    mt-5  border-gray-20 border rounded-sm 
    overflow-x-scroll scrollbar-thin scrollbar-thumb-black'>
       {suggestions.map(({id,avatar,username})=> (
         <Story key={id} img={avatar}  username={username} />
       )
      )}  
    </div>
  )
}
