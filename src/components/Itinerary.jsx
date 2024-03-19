import React from "react";

function Itinerary({ itinerario }) {
  function precio(cantidad) {
    let final = "";
    for (let i = 0; i < cantidad; i++) {
      final += "💰";
    }
    return final;
  }
  return (
    <div className="flex flex-col flex-wrap items-center mt-7 italic text-white bg-gray-700 p-5">
      <h1 className="text-lg sm:text-xl md:text-2xl italic mb-2">{itinerario.title}</h1>
      <section className="">
        <img className="border border-solid my-5" src={itinerario.guide_image} alt={itinerario.guide} />
        <h4 className="text-md sm:text-lg md:text-xl font-bold">{itinerario.guide}</h4>
      </section>
        <p className="text-base sm:text-lg md:text-xl">{itinerario.description}</p>
        <p className="text-sm sm:text-base md:text-lg">Price: {precio(itinerario.price)}</p>
        <p className="text-sm sm:text-base md:text-lg">Duration: {itinerario.duration} Hours</p>
      <section>
        <h3 className="">ACTIVITIES</h3>
        <div className="flex flex-row">
          {itinerario.activities.map((e) => ( <img key={Math.random()} className="sm:w-72 sm:h-72 h-64 w-64 mb-5 object-cover border-2 border-black border-solid m-2" src={e}></img> ))}
        </div>
      </section>
      <p className="text-xl sm:text-base lg:text-lg">{itinerario.hashtags.join(" ")}</p>
    </div>
  );
}

export default Itinerary;
