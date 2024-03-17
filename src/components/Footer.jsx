import { Link } from "react-router-dom";

const Footer = () => {
    return (
    <>
        <footer className="flex justify-around items-center border border-solid bg-gray-900 text-white">
            <div className="flex flex-row flex-wrap m-2 p-5">
                <Link className="flex flex-row items-center gap-2 font-bold p-10" to="https://web.whatsapp.com/"><img className="w-6 h-6" src="./whatsapp.png" alt="" />WhatsApp</Link>
                <Link className="flex flex-row items-center gap-2 font-bold p-10" to="https://instagram.com"><img className="w-6 h-6" src="./instagram.png" alt="" /> Instagram</Link>
                <Link className="flex flex-row items-center gap-2 font-bold p-10" to="https://facebook.com"><img className="w-6 h-6" src="./facebook.png" alt="" />Facebook</Link>
                <Link className="flex flex-row items-center gap-2 font-bold p-10" to="https://twitter.com"><img className="w-6 h-6" src="./twitter.png" alt="" />Twitter</Link>
                <Link className="flex flex-row items-center gap-2 font-bold p-10" to="https://gmail.com"><img className="w-6 h-6" src="./gmail.png" alt="" />Gmail</Link>
            </div>
        </footer>   
    </>
)
}

 export default Footer