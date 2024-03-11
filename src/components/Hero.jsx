const Hero = () => {
    return (
        <>
          <section className="relative mt-20 border border-white">
            <img src="/banner3.png" alt="Imagen de banner" className="w-full h-full max-h-full hover:max-h-screen" />
            <a href="./views/cities.jsx" className="absolute top-52 left-1/2 transform -translate-x-1/2 -translate-y-3/4 lg:top-3/4 lg:left-2/4 text-center text-3xl border border-black p-2 rounded-xl bg-orange-300 bg-opacity-20 w-44 h-26 shadow-2xl italic">More Cities</a>
          </section>
        </>
    )
}

export default Hero