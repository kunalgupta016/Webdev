import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    console.log("Email is : ", email);
    console.log("Password is : ", password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center ">
      <div className="border-2 rounded-xl border-emerald-600 p-20 ">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="outline-none bg-transparent placeholder:text-gray-400
                border-2 border-emerald-600 rounded-full py-3 px-5 text-xl"
            type="email"
            
            placeholder="Enter Email"
          />

          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="outline-none bg-transparent placeholder:text-gray-400
                border-2 border-emerald-600 rounded-full py-3 px-5 text-xl mt-4"
            type="password"
            
            placeholder="Enter Password"
          />

          <button
            className="mt-7 w-full text-white outline-none  placeholder:text-white
                 bg-emerald-600 rounded-full border-none py-3 px-5 text-xl font-semibold "
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
