import { useEffect, useState, useRef } from "react";
import { getCities } from "../services/citiesQueries";
import CitiesCard from "../components/CitiesCard"

export const Cities = () => {
  const [cities, setCities] = useState([]);
  const [filters, setFilters] = useState([]);
  const inputSerch = useRef(null);

  useEffect(() => {
    getCities().then((data) => {
      setCities(data);
      setFilters(data);
    });
  }, []);

  const handleInput = () => {
    const filter = filterByName(cities, inputSerch.current.value);
    setFilters(filter);
  };

  const filterByName = (list, value) =>
    list.filter((city) =>
      city.name.toLowerCase().startsWith(value.toLowerCase().trim())
    );

  return (
    <>
      <main className="grow flex flex-col gap-5 justify-center items-center bg-gray-500 mt-20">
        <section className="w-full flex justify-center flex-wrap gap-5 mb-12">
          <h2 className="w-full text-center text-4xl text-white font-semibold mt-5 italic">Cities</h2>
          <search className="w-full flex justify-center">
            <input className="w-5/12 sm:w-80 border border-solid border-black shadow-xl"  placeholder="Ej: Hawaii" type="text" name="Name_city" onInput={handleInput} ref={inputSerch} />
          </search>
          {filters.length > 0 ? (
            filters.map((city) => (
            <CitiesCard key={city.id} cities={city} />
            ))
          ): (
            <h2 className="text-2xl gap-5">No hay cuidades que coincidan con esa busqueda</h2>
          )}
        </section>
      </main>
    </>
  );
};

export default Cities;
