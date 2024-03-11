import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation()
    return (
      <>
       <header className="flex flex-row flex-wrap justify-between px-3 items-center h-20 fixed w-full top-0 z-10 bg-gray-900">
          <img src="/billete-de-avion.png" alt="" className="w-20 h-20 p-2"/>
            <div className="flex gap-5 text-white">
                <a href="#" className="p-2 mx-1 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-400 duration-150 bg-fuchsia-500">Home</a>
                <a href="./views/Cities.jsx" className="p-2 mx-1 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-400 duration-150">Cities</a>
                <a href="#" className="p-2 mx-1 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-400 duration-150"><img src="usuario.png" alt="" className="w-8 h-8"/></a>
            </div>
       </header>
      </>
    )
  }
  
  export default Header


 