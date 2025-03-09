import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='flex-shrink-0  p-5 h-full w-[300px]  bg-yellow-400 rounded-xl'>
    <div className='flex  items-center justify-between'>
        <h3 className='bg-red-600  px-3 py-1 text-sm rounded'>{data.task_category}</h3>
        <h4 className='text-sm'>{data.task_date}</h4>
    </div>
    <h2 className='mt-5 text-2xl font-semibold'>{data.task_title}</h2>
    <p className='text-sm mt-2'>{data.task_description}</p>
    <div className='mt-2'>
        <button className='py-1 px-2 bg-yellow-600 rounded'>Failed Task</button>
    </div>
  </div>
  )
}

export default FailedTask
