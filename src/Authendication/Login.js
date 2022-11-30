import axios from "axios";
import { useForm } from "react-hook-form";



const Login = () => {

  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data)
    loginPost(data)
  };

  const loginPost = (data) => {
    const options = {
      url: "http://localhost:5000/users",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: data,
    };

    axios(options).then((response) => {
      console.log(response.status);
    });
    console.log("Server data");
  };

  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
            <div className="space-y-4">
              <input
                type="password"
                name="passCode"
                {...register("passCode")}
                className="text-sm rounded-lg w-full  focus:outline-none hover:cursor-default"
              />
              <input
                type="text"
                name="email"
                placeholder="Email Address"
                {...register("email")}
                className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                {...register("password")}
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
