import React, { useState } from "react";
import CarrouselComponent from "./CarrouselComponent";

export const Carrousel = ({citys}) => {
  const [arrayCities, setArraycities] = useState(citys[0]);
  const [index, setIndice] = useState(0);

  const next = () => {
    let aux = index == 2 ? 0 : index + 1;
    setIndice(aux);
    setArraycities(citys[aux]);
  };
  const prev = () => {
    let aux = index == 0 ? 2 : index - 1;
    setIndice(aux);
    setArraycities(citys[aux]);
  };

  return (
    <div style={{ backgroundImage: 'url("./fondo2.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="flex flex-wrap justify-center h-full ">
        <h1 className="text-2xl w-full mt-8 mb-8 text-center text-black font-semibold bg-white opacity-60 italic">Popular MyTineraries!</h1>
        <button className="mb-16" onClick={prev}> <img src="/flecha-izq.png" alt="" className="w-10 h-10" /> </button>
        <CarrouselComponent arrayCities={arrayCities} />
        <button className="mb-16" onClick={next}> <img src="/flecha-der.png" alt="" className="w-10 h-10" /> </button>
      </div>
    </div>
  );
};

export default Carrousel