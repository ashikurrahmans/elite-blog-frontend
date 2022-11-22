import React, { useState } from "react";
import axios from "axios"

const Login = () => {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const names = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [names]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // alert(inputs.passcode);
        // alert(inputs.email);
        // alert(inputs.password);
        // fetch()
// const url = 'http://localhost:5000/hello/dashboards/login';
// const options = {
//   method: 'POST',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json;charset=UTF-8'
//   },
//   body: JSON.stringify(inputs)
// };

// fetch(url, options)


const options = {
    url: 'http://localhost:5000/hello/dashboards/login',
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data: inputs
  };
  
  axios(options)
    .then(response => {
      console.log(response.status);
    });
    console.log("Server data")
 }



  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <form onSubmit={handleSubmit}>
          <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
            <div className="space-y-4">
              <input
                type="password"
                name="passcode"
                onChange={handleChange}
                className="text-sm rounded-lg w-full  focus:outline-none hover:cursor-default"
              />
              <input
                type="text"
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
                className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                onChange={handleChange}
                name="password"
                className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
              />
            </div>
            <div className="text-center mt-6">
              <button className="py-3 w-64 text-xl bg-[#a9dab9] rounded-2xl text-white ">
                Checks
              </button>
            </div>
          </div>
        </form>
        <div className="w-20 h-40 absolute bg-[#a9dab9] rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
      </div>
    </>
  );
};

export default Login;
