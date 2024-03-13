import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const location = useLocation()
  const links = [ 
    {path: "/", title: "Home", active: "/" == location.pathname},
    {path: "/Cities", title: "Cities", active: "/Cities" == location.pathname}
  ]
    return (
      <>
       <header className="flex flex-row flex-wrap justify-between px-3 items-center h-20 fixed w-full top-0 z-10 bg-gray-900">
          <img src="/billete-de-avion.png" alt="" className="w-20 h-20 p-2"/>
          <nav className="flex gap-5 text-white">
            {links.map((link) => (<Link  key={link.title} className={`p-2 mx-1 italic rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-400 duration-150 ${link.active ? " bg-gray-700 bg-opacity-80" : ""}`} to={link.path}>{link.title}</Link>))}
            <img className="flex sm:w-12 sm:h-12 w-10 h-10" src="./public/usuario.png" alt="imagen de usuario" />
          </nav>
       </header>
      </>
    )
  }
  
  export default Header


 