import React from 'react'

function Select() {
  return (
        <div>
        <div className='grid grid-cols-3 gap-3 m-2'>
            <button className='rounded-full bg-green-400 h-10  '  >All products</button>
            <button  className=' rounded-full bg-green-400 h-10  ' >Snakes</button>
            <button  className=' rounded-full bg-green-400 h-10  ' >Sweet</button>
            <button className=' rounded-full bg-green-400 h-10  '  >Breakfast</button>
            <button  className=' rounded-full bg-green-400 h-10  ' >Lunch</button>
            <button  className=' rounded-full bg-green-400 h-10  ' >Dinner</button>
        </div>
    </div>
   
  )
}

export default Select