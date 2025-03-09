import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className='flex-shrink-0  p-5 h-full w-[300px]  bg-red-400 rounded-xl'>
    <div className='flex  items-center justify-between'>
        <h3 className='bg-red-600  px-3 py-1 text-sm rounded'>{data.task_category}</h3>
        <h4 className='text-sm'>{data.task_date}</h4>
    </div>
    <h2 className='mt-5 text-2xl font-semibold'>{data.task_title}</h2>
    <p className='text-sm mt-2'>{data.task_description}</p>
    <div className='flex justify-between mt-4 overflow-none'>
        <button className='bg-green-700 py-1 px-2 text-sm rounded'>Mark As Completed</button>
        <button className='bg-red-700 py-1 px-2 text-sm rounded'>Mark As Failed</button>
    </div>
  </div>
  )
}

export default AcceptTask
