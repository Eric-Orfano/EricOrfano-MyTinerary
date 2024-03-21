import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authQueries from "../services/authQueries";
import alerts from "../utils/alertas";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  
  const navigate = useNavigate();

  function handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    const aux = { ...formData };
    aux[name] = value;
    setFormData(aux);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const aux = { ...formData };
    for (const key in aux) {
      if (!aux[key]) delete aux[key];
    }
    authQueries.login(aux).then((response) => {
      console.log(response);
      if (response.status == 200) {
        alerts.success("Welcome " + response.data.first_name);
        navigate("/");
      } else {
        alerts.error(response.statusMsg);
      }
    });
  }

  return (
    <main className="bg-gray-500 grow pt-20 italic">
      <div className="flex flex-col gap-5 justify-center items-center mt-40">
        <h2 className="text-5xl font-bold">Login</h2>
        <div className="border w-10/12 py-5 flex flex-col items-center h-fit md:w-1/2 lg:w-1/3 m-2">
          <form
            onSubmit={handleSubmit}
            onInput={handleInput}
            className="w-full text-zinc-950 flex flex-col items-center gap-5 pb-5"
          >
            <input
              className="w-10/12 h-10 outline-none rounded-lg ps-5"
              type="email"
              placeholder="Email"
              name="email"
            />
            <input
              className="w-10/12 h-10 outline-none rounded-lg ps-5"
              type="password"
              placeholder="Password"
              name="password"
            />
            <input
              type="submit"
              className="italic transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-400 duration-150 cursor-pointer bg-white w-60 text-black h-10 rounded-lg font-semibold text-xl shadow-[1px_7px_7px_1px_rgba(0,0,0,1)]"
              value="Sign in"
            />
          </form>
          <Link
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-400 duration-150 flex justify-center items-center bg-white w-60 text-black h-10 rounded-lg font-semibold text-xl shadow-[1px_7px_7px_1px_rgba(0,0,0,1)]"
            to="/registro"
          >
            Create Account
          </Link>
        </div>
      </div>  
    </main>
  );
}

export default Login;
