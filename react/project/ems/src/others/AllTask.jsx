import React, { useContext } from "react";
import { AuthContext } from "../context/Authprovider";

const AllTask = () => {
  const [userData,setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded ">
      <div className="bg-red-400 mb-2 px-5 py-2 flex justify-between rounded">
        <h2 className="text-xl font-medium  w-1/5 ">Employees Name </h2>
        <h3 className="text-xl font-medium  w-1/5 ">New Task </h3>
        <h5 className="text-xl font-medium  w-1/5">Active Task</h5>
        <h5 className="text-xl font-medium  w-1/5 ">Completed Task</h5>
        <h5 className="text-xl font-medium  w-1/5">Failed Task</h5>
      </div>

      <div >
        {userData.map(function (elem,idx) {
          return (
            <div key={idx} className="border-2 border-emerald-500 mb-2 px-5 py-2 flex justify-between rounded">
              <h2 className="text-xl font-medium  w-1/5 b">{elem.firstname}</h2>
              <h3 className="text-xl font-medium  w-1/5 text-blue-400">{elem.task_count.new_task}</h3>
              <h5 className="text-xl font-medium  w-1/5 text-yellow-400">{elem.task_count.active}</h5>
              <h5 className="text-xl font-medium  w-1/5 text-white">{elem.task_count.complete}</h5>
              <h5 className="text-xl font-medium  w-1/5 text-red-600">{elem.task_count.failed}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
