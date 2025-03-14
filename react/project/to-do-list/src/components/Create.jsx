import React, { useState } from 'react';
import Card from './Card';

const Create = () => {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      setTasks([...tasks, input]);
      setInput('');
    }
  };

  return (
    <>
      <div className="mt-3 w-auto flex h-auto py-3 items-center justify-center ">
        <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-lg">
          <h1 className="text-center font-serif font-semibold text-3xl text-indigo-700 mb-4">To Do List</h1>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-3 text-xl  text-black rounded-lg border-2 border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            type="text"
            placeholder="Enter your task..."
          />
          <button
            onClick={submitHandler}
            className="w-full mt-4 p-3 text-white bg-indigo-600 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Add Task
          </button>
        </div>
      </div>


      <Card tasks={tasks} setTasks={setTasks} />
    </>
  );
};

export default Create;
