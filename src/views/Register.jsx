import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCountries } from "../services/countries";
import authQueries from "../services/authQueries";
import alerts from "../utils/alertas";

function Registro() {
    const [paises,setPaises] = useState([])
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        country: "",
});

useEffect(()=>{
    getCountries().then((e)=> setPaises(e))
},[])
let paisesSelect = paises.map((pais) => <option key={pais} value={pais}>{pais}</option>)

function handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    const aux = {...formData};
    aux[name] = value;
    setFormData(aux);
}

function handleSubmit(e) {
    e.preventDefault();
    const aux = {...formData};
    for (const key in aux) {
        if(!aux[key]) delete aux[key];
    }
    authQueries.register(aux).then((response) => {
        if (response.status == 201) {
            alerts.success("Account created, you can log in");
            navigate("/login");
        } else {
            alerts.error(response.statusMsg);
        }
    });
}

return (
    <main className="grow pt-20 flex flex-col gap-5 justify-center items-center bg-gray-500 italic">
        <h2 className="text-5xl font-bold">To register</h2>
        <div className="flex flex-row flex-wrap justify-center">
            <div className="border w-full md:w-1/2 lg:w-1/3 py-5 flex flex-col items-center m-2">
                <form
                onSubmit={handleSubmit}
                onInput={handleInput}
                className="w-full text-zinc-950 flex flex-col items-center gap-5 pb-5"
                >
                    <input
                    className="w-10/12 h-10 outline-none rounded-lg ps-5"
                    type="text"
                    placeholder="Please, entre your firstName"
                    name="first_name"
                    />
                    <input
                    className="w-10/12 h-10 outline-none rounded-lg ps-5"
                    type="text"
                    placeholder="Please, entre your lastName"
                    name="last_name"
                    />
                    <input
                    className="w-10/12 h-10 outline-none rounded-lg ps-5"
                    type="email"
                    placeholder="Please, entre your email"
                    name="email"
                    />
                    <input
                    className="w-10/12 h-10 outline-none rounded-lg ps-5"
                    type="password"
                    placeholder="Please, entre your password"
                    name="password"
                    />
                    <select className='w-10/12 h-10 outline-none rounded-lg ps-5' defaultValue={"asd"} name="country" id="">
                        <option value="asd" disabled>Select a country</option>
                        {paisesSelect}
                     </select>
                    <input
                    type="submit"
                    className="italic cursor-pointer bg-white w-60 text-black h-10 rounded-lg font-semibold text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-400 duration-150 shadow-[1px_7px_7px_1px_rgba(0,0,0,1)]"
                    value="Send"
                    />
                </form>
                <Link
                    className="flex justify-center items-center bg-white w-60 text-black h-10 rounded-lg font-semibold text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-400 duration-150 shadow-[1px_7px_7px_1px_rgba(0,0,0,1)]"
                    to="/login"
                    >
                    Login
                </Link>
            </div>  
            <img src="/register.jpg" alt="" className="w-full md:w-1/2 lg:w-1/3 p-5"/>  
        </div>    
    </main>
    );
}

export default Registro;


