import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const Tasklist = ({data}) => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex justify-start items-center gap-4 flex-nowrap w-full py-5  mt-10 '>

      {data.tasks.map((elem,idx)=>{
        if(elem.active){
            return <AcceptTask key={idx} data={elem} />
        }
        if(elem.new_task){
            return <NewTask key={idx} data={elem}/>
        }
        if(elem.complete){
            return <CompleteTask key={idx} data={elem} />
        }
        if(elem.failed){
            return <FailedTask key={idx} data={elem} />
        }
      })}

      

    </div>
  )
}

export default Tasklist
