import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/actions/userAction";

const Header = () => {
  const location = useLocation();
  const user = useSelector((store) => store.user.user);
  const dispatch = useDispatch();

   const links = [
    {path: "/", title: "Home", active: "/" == location.pathname, visible: true},
    {path: "/Cities", title: "Cities", active: "/Cities" == location.pathname, visible: true},
    {path: "/Registro", title: "Register", active: "/Registro" == location.pathname, visible: user.first_name ? false : true},
    {path: "/Login", title: "Login", active: "/Login" == location.pathname, visible: user.first_name ? false : true,}
  ]

  const handleClick = () => {
    dispatch(logout());
  };
  return (
    <header className="flex justify-between px-3 items-center h-20 fixed w-full top-0 z-10 bg-gray-900">
      <img src="/logo.png" alt="Logo pagina" className="w-20 h-20 p-2" />
      <nav className="flex flex-wrap gap-5 text-white">
        {links.map((link) => (
          <Anchor link={link} />
        ))}

        {user.first_name && (
          <button
            onClick={handleClick}
            className="p-2 mx-1 italic rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-400 duration-150 bg-red-700 bg-opacity-80"
          >
            {" "}
            Logout{" "}
          </button>
        )}
      </nav>
    </header>
  );
};

const Anchor = ({ link }) => {
  if (link.visible) {
    return (
      <Link
        key={link.title}
        className={`p-2 mx-1 italic rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-400 duration-150 ${
          link.active ? "bg-gray-500 bg-opacity-80" : ""
        }`}
        to={link.path}
      >
        {" "}
        {link.title}{" "}
      </Link>
    );
  } else {
    <></>;
  }
};

export default Header;
