import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <>
          <section className="relative mt-20 border border-white">
            <img src="/banner.png" alt="Imagen de banner" className="w-full h-full max-h-full hover:max-h-screen" />
            <Link className="absolute w-44 inset-x-1/4 bottom-4 lg:bottom-6 transform -translate-x-1/2 -translate-y-1/2 mt-5 text-center text-3xl lg:text-3xl border border-black p-2 rounded-xl bg-gray-300 bg-opacity-20 shadow-2xl italic" to="/Cities" >More Cities</Link>
          </section>
        </>
    )
}

export default Hero

