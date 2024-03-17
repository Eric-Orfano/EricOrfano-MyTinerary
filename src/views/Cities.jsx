import { useEffect, useRef } from "react";
import { getCities } from "../services/citiesQueries";
import CitiesCard from "../components/CitiesCard"
import { useSelector, useDispatch  } from "react-redux";
import {filterByName, load} from'../redux/actions/citiesActions'

export const Cities = () => {
  const inputSerch = useRef(null);
  const dispatch = useDispatch()
  const {allCities, filtered, search} = useSelector( (store) => store.cities)

  useEffect(() =>{
    if(allCities.length == 0){
    getCities().then( (data) => {
      dispatch(load(data))
    })}
  }, []);

  const handleInput = () => {
    dispatch( filterByName(inputSerch.current.value))
  };

  return (
    <>
      <main className="grow flex flex-col gap-5 justify-center items-center bg-gray-500 mt-20">
        <section className="w-full flex justify-center flex-wrap gap-5 mb-12">
          <h2 className="w-full text-center text-4xl text-white font-semibold mt-5 italic">Cities</h2>
          <search className="w-full flex justify-center">
            <input className="w-5/12 sm:w-80 border border-solid border-black shadow-xl" placeholder="Ej: Hawaii" type="text" name="Name_city" onInput={handleInput} ref={inputSerch} defaultValue={search}/>
          </search>
          {filtered.length > 0 ? (
            filtered.map((city) => (
            <CitiesCard key={city.id} cities={city} />
            ))
          ): (
            <h2 className="text-2xl gap-5">There are no cities that match the search</h2>
          )}
        </section>
      </main>
    </>
  );
};

export default Cities;
