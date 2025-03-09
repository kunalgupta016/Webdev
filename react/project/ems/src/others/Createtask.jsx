import React, { useState } from 'react'
import { useContext } from 'react';
import { AuthContext } from '../context/Authprovider';

const Createtask = () => {

    const [userData,setUserData] = useContext(AuthContext);

  const [taskTitle,setTaskTitle] = useState('')
  const [taskDescription,setTaskDescription] = useState('')
  const [taskDate,setTaskDate] = useState('')  
  const [assignTO,setAssignTo] = useState('')
  const [category,setCategory] = useState('')

  const [newtask,setNewTask] = useState({})
  
  // const submitHandler=(e)=>{
  //   e.preventDefault();

  //   setNewTask({taskTitle,taskDescription,taskDate
  //     ,category,active:false,new_task:true,complete:false,failed:false}
  //   )

  //   // const data = userData
    

  //   userData.forEach(function(elem){
  //     if(assignTO==elem.firstname){
  //       elem.tasks.push(newtask)
  //       elem.task_count.new_task = elem.task_count.new_task+1}
  //  })


  //  setUserData(userData)
  //  console.log(userData);

  //  setAssignTo('')
  //  setCategory('')
  //  setTaskDate('')
  //  setTaskDescription('')
  //  setTaskTitle('')

  // }


  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
        task_title: taskTitle,
        task_description: taskDescription,
        task_date: taskDate,
        task_category: category,
        active: false,
        new_task: true,
        complete: false,
        failed: false
    };

    // Update the user data properly
    const updatedUserData = userData.map((elem) => {
        if (assignTO === elem.firstname) {
            return {
                ...elem,
                tasks: [...elem.tasks, newTask], // Create a new array instead of modifying existing
                task_count: {
                    ...elem.task_count,
                    new_task: elem.task_count.new_task + 1
                }
            };
        }
        return elem;
    });

    setUserData(updatedUserData);  // Update the state correctly
    console.log(updatedUserData);

    // Clear input fields
    setAssignTo('');
    setCategory('');
    setTaskDate('');
    setTaskDescription('');
    setTaskTitle('');
};


  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
        <form onSubmit={(e)=>{
          submitHandler(e);
        }}
         className="flex flex-wrap w-full   items-start justify-between">
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>

              <input
              value={taskTitle}
              onChange={(e)=>{
                setTaskTitle(e.target.value)
              }}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]  border-gray-400 mb-4"
                type="text"
                
                placeholder="make a ui dsiggn"
              />
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>

              <input
              value={taskDate}
              onChange={(e)=>{
                setTaskDate(e.target.value)
                }}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]  border-gray-400 mb-4"
                type="date"
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Assign to </h3>

              <input
              value={assignTO}
              onChange={(e)=>{
                setAssignTo(e.target.value)
                }}
              
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]  border-gray-400 mb-4"
                type="text"
                placeholder="Employee Name"
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>

              <input
              value={category}
              onChange={(e)=>{
                setCategory(e.target.value)
                }}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                
                placeholder="Design , dev , etc"
              />
            </div>
          </div>

          <div className="w-1/2 flex flex-col items-start">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>

            <textarea
            value={taskDescription}
            onChange={(e)=>{
              setTaskDescription(e.target.value)
              }}
              className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              
            ></textarea>
            <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
              Create Task
            </button>
          </div>
        </form>
      </div>
  )
}

export default Createtask
