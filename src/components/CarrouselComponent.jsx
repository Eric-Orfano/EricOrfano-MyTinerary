import React from 'react'

export const CarrouselComponent = ({arrayCities}) => {
  return (
    <div className="flex flex-wrap justify-center w-2/3 sm:2/3 2xl:w-2/5 gap-5 mb-16">
          {arrayCities.map((city) => (
            <article className="border border-solid border-white" key={city.name}>
              <img className="w-28 h-28 sm:w-64 sm:h-72 object-cover" src={city.image} alt="imagen de la cuidad" />
              <div className="border border-solid border-white">
                <h1 className=" bg-black bg-opacity-50 text-white text-s sm:text-xl text-center border-solid italic underline">{city.name}</h1>
                <p className="bg-black bg-opacity-50 text-white text-xs sm:text-sm text-center italic">{city.country}</p>
              </div>
            </article>
          ))}
        </div>
  )
}

export default CarrouselComponent