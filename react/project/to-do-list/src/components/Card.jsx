import React from 'react';

const Card = ({ tasks, setTasks }) => {
  const deleteHandler = (taskToDelete) => {
    setTasks(tasks.filter((task) => task !== taskToDelete));
  };

  return (
    <div className="mt-8 w-auto flex h-auto py-3 items-center justify-center">
      <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-lg">
        <h1 className="text-center font-serif font-semibold text-3xl text-indigo-700 mb-4">Your Tasks</h1>
        <ol className="space-y-4">
          {tasks.length > 0 ? (
            tasks.map((task, index) => (
              <li key={index} className="flex justify-between items-center bg-indigo-100 rounded-lg p-4 hover:shadow-lg transition duration-300">
                <p className="text-lg font-semibold text-indigo-800">{task}</p>
                <button
                  onClick={() => deleteHandler(task)}
                  className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
                >
                  Delete
                </button>
              </li>
            ))
          ) : (
            <p className="text-center text-gray-500">No tasks yet! Add some tasks.</p>
          )}
        </ol>
      </div>
    </div>
  );
};

export default Card;
